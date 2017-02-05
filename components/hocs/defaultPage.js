import React from 'react'
import Head from 'next/head'
import Stores from '../../stores/index.js';
import Header from '../Header'
import { getUserFromCookie, getUserFromLocalStorage } from '../../utils/auth'

 import { Provider } from 'mobx-react';



export default Page => class DefaultPage extends React.Component {
  static async getInitialProps (ctx) {
    const loggedUser = process.browser ? getUserFromLocalStorage() : getUserFromCookie(ctx.req)
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
    const isServer = ctx.req != undefined;
    const stores = Stores(isServer);
    if(isServer){
      await stores.MetricStore.fetchMetricNames();
    }
   

    return { 
      ...pageProps,
      loggedUser,
      currentUrl: ctx.pathname,
      isAuthenticated: !!loggedUser,
      initialState: stores.getState(), 
      isServer
    }
  }



  constructor (props) {
    super(props)
    this.stores = Stores(props.isServer, props.initialState);
    this.logout = this.logout.bind(this)
  }

  logout (eve) {
    if (eve.key === 'logout') {
        console.log("LOGGING OUT!")
        alert("test")
      this.props.url.pushTo(`/?logout=${eve.newValue}`)
    }
  }

  componentDidMount () {
    window.addEventListener('storage', this.logout, false)
  }

  componentWillUnmount () {
    window.removeEventListener('storage', this.logout, false)
  }

  render () {
    const cssFiles = [
      'https://unpkg.com/normalize.css@5.0.0/normalize.css',
      'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css',
      '/static/react-grid-layout.css',
      '/static/react-resizable.css',
      '/static/react-grid-layout-overrides.css',
      '/static/metricsgraphics.css',
      '/static/bootstrap-overrides.css',
      '/static/custom.css'
    ]
    return ( <Provider { ...this.stores }>
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {cssFiles.map((c, i) => <link key={i} href={c} rel='stylesheet' />)}
          <style>
            {`* {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }`}
          </style>
          <title>Digitalis OpsManager</title>
        </Head>

        <div className="app">
          <div className="main">
            <Header {...this.props} />
            <Page {...this.props} />
          </div>
        </div>
      </div>
      
       </Provider>
    )
  }
}
