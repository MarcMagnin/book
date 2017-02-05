import ChartStore from './chart.js';
import MetricStore from './metric.js';
import uiState from './uistate.js';

const defaultState = {
  ChartStore: null,
  MetricStore: null,
  UiState: uiState
}

class Stores {
  constructor(initialState) {
    this.ChartStore = (initialState.ChartStore) ? ChartStore.fromJS(initialState.ChartStore): new ChartStore();
    this.MetricStore = (initialState.MetricStore) ? MetricStore.fromJS(initialState.MetricStore): new MetricStore();
    this.UiState = uiState;
    
  }

  getState() {
    return {
      ChartStore: this.ChartStore.toJS(),
      MetricStore: this.MetricStore.toJS(),
      UiState: this.UiState 
    };
  }
}

export default (isServer, initialState=defaultState) => {
  if(isServer) {
    return new Stores(initialState);
  }
  else {
 
    if(!window.__stores__){
      window.__stores__ = new Stores(initialState);

    }
    return window.__stores__;
  }
}
