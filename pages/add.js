import React from 'react'
import { Provider } from 'mobx-react';
import Link from 'next/link';
import Head from 'next/head'

import Stores from '../stores/index.js';
import AddChart from '../components/chart/add.js';
import ChartList from '../components/chart/list.js';

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const isServer = !!req;
    const stores = Stores(isServer);
    await stores.MetricStore.fetchMetricNames();
    //await MetricStore.fetch("agent_id");
    return {initialState: stores.getState(), isServer};
  }

  constructor(props) {
    super(props);
    this.stores = Stores(props.isServer, props.initialState);
  }

  render () {
    return <Provider { ...this.stores }>
       <div>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
         <link rel="stylesheet" href="/static/metricsgraphics.css" />
          <link rel="stylesheet" href="/static/react-select.css" />
          <link rel="stylesheet" href="/static/react-select-virtualized.css" />
          <link rel="stylesheet" href="/static/react-virtualized.css" />
      	
	  </Head>
        <h1>Add Chart</h1>
        <AddChart />
        <hr />
        <ChartList />
      </div>
    </Provider>
  }
}
//  <Link href="/">I'm done !</Link>