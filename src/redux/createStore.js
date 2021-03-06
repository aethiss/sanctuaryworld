/* eslint-disable no-undef */
import React from 'react'
import initializeStore from './reduxStore'
import { hydrates } from '../../server/middleware/middleware'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState = {}) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default (App) => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      const { ctx } = appContext
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      let reduxStore = getOrCreateStore()
      let appProps = {}

      // We are Server Side, if yes Hydrate the Redux-Store ?
      if (ctx?.req) {
        await hydrates(ctx.req, reduxStore)
      }

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      // Wait if other pages have initial (server) props
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      // If we receive token cookie from server
      if (ctx?.req?.cookies?.sidToken) {
        appProps = { ...appProps, token: ctx.req.cookies.sidToken }
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      }
    }

    constructor(props) {
      super(props)
      // eslint-disable-next-line react/prop-types
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
