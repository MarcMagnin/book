import React from 'react'
import { observable, autorun, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react';
import Masonry from '../components/Masonry'
import defaultPage from '../components/hocs/defaultPage'
import { Modal, Button } from 'react-bootstrap';
import Stores from '../stores/index.js';
import ChartEditor from '../components/chart/chart-editor.js';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const loadLayout = (key) => {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-7')) || {};
    } catch (e) {/*Ignore*/ }
  }
  return ls[key];
}



//@inject('ChartStore', 'MetricStore', 'UiState')
@inject('ChartStore', 'UiState')
@observer
class DashboardView extends React.Component {

  @observable isModalVisible = false;
  @observable newCounter = 0;

  constructor(props) {
    super(props)

    let layout = loadLayout('layout') || [];
    // this.items = [0, 1, 2].map(function(id, key, list) {
    //     return {i: id.toString(), x: id * 2, y: 0, w: 2, h: 2, add: id === (list.length - 1).toString()};
    //   });
    props.ChartStore.charts.map(function (obj, id, list) {
      if (layout[id]) {
        obj.datagrid = {
          i: layout[id].i,
          x: layout[id].x,
          y: layout[id].y,
          w: layout[id].w,
          h: layout[id].h
        }
      } else {
        obj.datagrid = {
          i: id.toString(),
          x: id * 2,
          y: 0,
          w: 6,
          h: 4
        }
      }
    });
  }
  //  this.props.ChartStore.charts.reverse().map( chart => 
  //           <Chart 
  //             chart={ chart } 
  //             metricNames={this.props.MetricStore.metrics.slice()} 
  //             metricStore={this.props.MetricStore}
  //             metricNamesFilterOptions={this.props.MetricStore.metricNamesFilterOptions} 
  //             key={ chart.id } 
  //             />


  @action onItemClick = (itemId) => {
    this.props.UiState.selectedChart = this.props.ChartStore.charts[itemId];
    this.showModal()
  }

  addChart = () => {
    /*eslint no-console: 0*/
    console.log('adding', 'n' + this.newCounter);
    this.items = this.items.concat({
      i: 'n' + this.newCounter,
      x: this.items.length * 2 % (this.cols || 12),
      y: Infinity, // puts it at the bottom
      w: 6,
      h: 4
    })

    this.newCounter = this.newCounter + 1
    console.log('this.items', this.items.length);
  }


  removeChart = () => {

  }

  @action showModal = () => {
    this.isModalVisible = true
  }

  @action closeModal = () => {
    console.log("woot")
    this.isModalVisible = false
  }


  saveLayout = (layout) => {
    console.log("saveLayouts")
    if (global.localStorage) {
      global.localStorage.setItem('rgl-7', JSON.stringify({
        ['layout']: layout
      }));
    }
  }

  componentDidMount() {

  }
onDrop (files) {
      var req = request.post('/upload');
        files.forEach((file)=> {
            req.attach(file.name, file);
        });
        req.end(function(err, res){
          console.log("WOOT")
          // Calling the end function will send the request
        });
    }
    
  render() {
    return <div>
      <p className="content">
        Welcome to your dashboad page!
      </p>
      <br />
      <button onClick={this.addChart}>Add Item</button>

      <button onClick={this.showModal}>showModal</button>
<Dropzone ref="dropzone" onDrop={this.onDrop} >
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
      <Masonry items={this.props.ChartStore.charts} layout={this.layout} onLayoutChange={this.saveLayout} onItemClick={this.onItemClick} />

      <Modal show={this.isModalVisible} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>What a cool chart!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <ChartEditor chart={this.props.UiState.selectedChart} />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>

  }
}



//export default defaultPage(Trigger)
export default defaultPage(DashboardView)

//export default observer(['ChartStore', 'MetricStore'], ListChart);