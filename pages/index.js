import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'

const fetch = require('node-fetch')

// Components
import Header from '../src/components/container/header/Header'

// libs
import { getCookie } from '../src/libs/cookieHelper'

// Actions

class Index extends Component {
  static async getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    if (isServer) {
      const token = getCookie('token', req.headers.cookie)
      if (token) {
        // await reduxStore.dispatch(autoLogin(token)) // Example
        return {
          ...reduxStore,
          currentState: reduxStore.getState(),
        }
      }
    }
    return {
      ...reduxStore,
      currentState: reduxStore.getState(),
    }
  }

  bnetTestAuth = () => {
    fetch(`http://localhost:3000/api/auth/bnet/callback`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('fetch done', data)
      })
  }

  render() {
    const { currentState, dispatch } = this.props
    return (
      <div className="bodyContainer">
        <Head>
          <title>Sanctuary World</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/layout.css"
          />
        </Head>
        <div className="wrapper">
          <div className="row">
            <div className="column">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="row">
                <div className="column">
                  <button onClick={this.bnetTestAuth}>BNET CONNECTION</button>
                </div>
                <div className="column">
                  <Link href="/auth/bnet">
                    <a>BNET TEST</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Index)
