import React from 'react'
import css from 'next/css'
import { autorun, extendObservable, action, computed  } from 'mobx';
import Masonry from '../components/Masonry'
import defaultPage from '../components/hocs/defaultPage'

const styles = {
  heading: css({
    fontSize: 40,
    fontWeight: 200,
    lineHeight: '40px'
  }),
  content: css({
    fontSize: 20,
    fontWeight: 200,
    lineHeight: '30px'
  })
}

class Chart{
  constructor() {
        extendObservable(this, {
            i:0, 
            x:0,
            y:0,
            w:4,
            h:4 
        })
    }

}

const loadLayout=(key)=>{
     let ls = {};
      if (global.localStorage) {
        try {
          ls = JSON.parse(global.localStorage.getItem('rgl-7')) || {};
        } catch(e) {/*Ignore*/}
      }
      return ls[key];
   }
//{"layout":[{"w":2,"h":2,"x":0,"y":0,"i":"0","moved":false,"static":false},{"w":2,"h":2,"x":2,"y":0,"i":"1","moved":false,"static":false},{"w":2,"h":2,"x":4,"y":0,"i":"2","moved":false,"static":false},{"w":2,"h":2,"x":4,"y":2,"i":"3","moved":false,"static":false},{"w":2,"h":2,"x":4,"y":4,"i":"4","moved":false,"static":false}]}
class Dashboard {
   // decorators are currently not yet support in Next.JS:
   // https://github.com/zeit/next.js/issues/26
  constructor() {
        let layout = loadLayout('layout')
        extendObservable(this, {
            layout : layout|| [],
            newCounter:0,
            items : [0, 1, 2].map(function(i, key, list) {
              if(layout){
                console.log("key:"+ layout[i].i +" x:"+layout[i].x)
                     return {i: layout[i].i, x: layout[i].x, y: layout[i].y, w: layout[i].w, h: layout[i].h};
              }else{
                   return {i: i.toString(), x: i * 2, y: 0, w: 6, h: 4, add: i === (list.length - 1).toString()};
              }
       
            }),
        })
    }
   

    addChart = ()=>{
           /*eslint no-console: 0*/
      console.log('adding', 'n' + this.newCounter);
      this.items= this.items.concat({
          i: 'n' + this.newCounter,
          x: this.items.length * 2 % (this.cols || 12),
          y: Infinity, // puts it at the bottom
          w: 4,
          h: 4})
         
      this.newCounter= this.newCounter + 1
           console.log('this.items', this.items.length);
      }
    

    removeChart = ()=>{

    }
   
  
    saveLayout= (layout)=>{
      console.log("saveLayouts")
      if (global.localStorage) {
        global.localStorage.setItem('rgl-7', JSON.stringify({
          ['layout']: layout
        }));
      }
    }
}

 const dashboard = new Dashboard();
autorun(() => console.log( dashboard.mounted + "Mounted:" ));

const DashboardView = () =>{


 return (
  <div>
  
    <h1 className={styles.heading}>Digitalis.io OpsManager</h1>
    <p className={styles.content}>
      What a cool test page!
    </p>
    <br />
    <button onClick={dashboard.addChart}>Add Item</button>
    <Masonry store={dashboard} onLayoutChange={dashboard.saveLayout}/>
  </div>
)}

export default defaultPage(DashboardView)