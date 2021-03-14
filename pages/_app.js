import App from 'next/app'
import React from 'react'
import withReduxStore from '../src/redux/createStore'
import { Provider } from 'react-redux'

// Styles
import Wrapper from '../src/components/commons/wrapper/Wrapper'
import '../styles/globals.css'
import "../node_modules/react-quill/dist/quill.snow.css"
import { setCookie } from '../src/libs/cookieHelper'

class MyApp extends App {
  componentDidMount() {
    const { token } = this.props
    if (token) setCookie("token", token, 1);
  }

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
