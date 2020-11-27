import App from 'next/app'
import React from 'react'
import withReduxStore from '../src/redux/createStore'
import { Provider } from 'react-redux'

// Styles
import Wrapper from '../src/components/commons/wrapper/Wrapper'
import '../styles/globals.css'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
