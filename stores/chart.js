import { action, autorun, observable, computed } from 'mobx';
import Uuid from 'uuid';
import 'rxjs/add/observable/dom/ajax'
import { Observable } from 'rxjs/Rx';

class Metric {
  @observable name;
  constructor(name) {
    this.name = name
  }
}

class Chart {
  static fromJS(store, chart) {
    return new Chart(store, chart.id, chart.title, chart.metric);
  }

  @observable agents = undefined;
  @observable metricNameSelected = [];
  @observable title;
   @observable counter = 0;
  @observable metrics = [];
  @observable metricsString = undefined;
  @observable type = "missing-data";
  
  constructor(store, id, title, metric) {
    this.store = store;
    this.id = id;
    this.flag = false;
    this.data = [];
    //this.addMetric("14_ClientRequest_Latencyclientrequest=Write,fct=15MinuteRate")
  }

  static initInterval = 1000;
  interval = Chart.initInterval;
  static maxInterval = 100000;



  metricSelectionChanged = action(function () {
    // this.metricNameSelected = value;
    // this.metrics =  this.metricNameSelected.split(",")
    var filter = {
      metrics: this.metrics
    }


    this.type = "line"
    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // better than doing multiple await fetch()
    Observable.forkJoin(
      this.fetch("cluster", filter),
      this.fetch("dc", filter),
      this.fetch("host_name", filter),
      this.fetch("agent_id", filter),
    ).subscribe(
      response => {
        this.clusters = response[0]
        this.dcs = response[1]
        // hosts comes in the format 'agentID;hostname'. This enable requesting to cassandra using the agentID
        this.hosts = response[2].map(val => {
          var tokens = val.name.split(";")
          return {
            agent: tokens[0],
            host: tokens[1]
          }
        })
        if (this.hostsSelected == null || this.hostsSelected.length == 0) {
          this.selectAllAgents()
        }
        this.startPolling()
      },
      err => console.error(err)
      );



  })

  refreshChart() {
    if (this.data.length > 0) {
      console.log("UPDATED DATA :", this.data)
      this.counter++
    }
  }

  @computed get isLoggedIn() {
    return !!this.data;
  }

  startPolling = action(function () {
    var rcv = this
    var pollers = this.metrics.map(metric => {
      console.log("FROM POLLER, METRIC IS: ", metric)
      //14_ClientRequest_Latencyclientrequest=Write_fct=15MinuteRate
      return Observable.ajax.getJSON(`http://localhost:2222/home/metrics?metric=${metric}&agents=${this.agents}&time=5&interval=5`)
    })
    this.unMount()
    this.poller = Observable.zip.apply(Observable, pollers)
      .retryWhen(function (errors) {
        return errors.scan(function (acc, x) { return acc + x; }, 0)
          .flatMap(function (x) {
            return Observable.timer(rcv.computeInterval(true));
          });
      })
      .repeatWhen(function (notification) {
        return notification
          .scan(function (acc, x) {
            return acc + x;
          }, 0)
          .flatMap(function (x) {
            return Observable.timer(rcv.computeInterval());
          });
      })
      .subscribe((x) => {
        this.data.length = 0
        //console.log("VALUE RECEIVED: " + JSON.stringify(x))
        x.map((metric) => {
          Object.keys(metric.Values).forEach((agent) => {
            if (agent && Object.keys(metric.Values[agent]).length > 0) {
              this.data.push(Chart.prepareMetricsArray(metric.Values[agent]))
            }
          });
        })

        if (this.data.length > 0) {
          this.refreshChart()
        } else {
          console.log("no data received")
        }
      },
      (e) => { console.log('onError: %s', e); },
      () => { console.log('onCompleted'); });
  })



  // backoff logic
  computeInterval(error) {
    if (error) {
      // double until maximum interval on errors
      this.interval = this.interval < Chart.maxInterval ? this.interval * 2 : Chart.maxInterval;
    } else {
      // anytime the poller succeeds, make sure we've reset to
      // default interval.. this also allows the initInterval to 
      // change while the poller is running
      this.interval = Chart.initInterval;
    }
    return this.interval;
  }



  // clean subscription in case we leave the page or add other metrics 
  unMount() {
    if (this.poller) {
      this.poller.unsubscribe();
    }
  }

  async fetch(fieldToFetch, filter) {
    try {

      var query = new function () {
        this.size = 0;

        if (filter) {
          this.query = {};
          this.query.filtered = {}
          this.query.filtered.filter = {};
          this.query.filtered.filter.terms = {};
          if (filter.dcs) {
            this.query.filtered.filter.terms.dc = filter.dcs;
          }
          if (filter.clusters) {
            this.query.filtered.filter.terms.cluster = filter.clusters;
          }
          if (filter.zones) {
            this.query.filtered.filter.terms.zone = filter.zones;
          }
          if (filter.regions) {
            this.query.filtered.filter.terms.region = filter.regions;
          }
          if (filter.metrics) {
            this.query.filtered.filter.terms.metric_name = filter.metrics;
          }
        }

        this.aggs = {}
        this.aggs.metric = {}
        this.aggs.metric.terms = {
          field: fieldToFetch,
          size: 0
        }
      }

      const res = await fetch('http://localhost:9200/metametrics/metric/_search', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
      });

      var res = await res.json();
      var result = []
      for (var k in res.aggregations.metric.buckets) {
        result.push({ name: res.aggregations.metric.buckets[k].key });
      }
      return result;
    } catch (e) {
      console.log('onError: %s', e);
    }
  }
  selectAllAgents() {
    this.agents = this.hosts.map(val => val.agent).join(',');
    console.log("SELECT ALL AGENTS WOOT: ", JSON.stringify(this.agents))
  }


  static prepareMetricsArray(metricsRaw) {
    const metrics = new Array();
    Object.keys(metricsRaw).forEach((key) => {
      metrics.push({ "d": new Date(key), "v": metricsRaw[key] })
      //console.log("pushing ", JSON.stringify({ "d": new Date(key), "v": metricsRaw[key] }))
    });

    return metrics;
  }

  toJS = () => {
    return {
      id: this.id,
      title: this.title,
      metrics: this.metrics,
      data: this.data.slice()
    };
  }
  destroy = () => this.store.charts.remove(this)

}

export default class ChartStore {

  static fromJS(initialState) {
    const chartStore = new ChartStore();
    chartStore.charts = initialState.map(chart => Chart.fromJS(chartStore, chart));
    return chartStore;
  }
  
  @observable  charts= [0, 1, 2].map(function (i, key, list) {
        return new Chart(this, i, "chart #" + i, "");
      })

  // Implement with some data store for the user
  //   fetchInitialCharts = () => {
  //     if(this.initialFetch == true) {
  //       return true;
  //     }
  //     return fetch('https://jsonplaceholder.typicode.com/charts')
  //     .then(res => res.json())
  //     .then(charts => {
  //       charts.forEach(chart => this.addChart(chart.title))
  //       this.initialFetch = true;
  //     }
  //     )
  //   }

  addChart = action((title) =>
    this.charts.push(new Chart(this, Uuid.v4(), title))
  )

  updateCharts = action(() => {
    this.charts.forEach(chart => chart.title = "YEAH");
  }
  )

  toJS = () => this.charts.map(chart => chart.toJS())

}