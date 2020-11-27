/* eslint-disable react/prop-types */
import React, { Component } from 'react'

// Next
import Head from 'next/head'

// Component
import HomePage from '../src/components/containers/homepage/HomePage'

class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <title>SanctuaryWorld Diablo 4 Player Comunity</title>
          <link rel='icon' href='/d4favicon.png' />
        </Head>
        <HomePage />
      </>
    )
  }
}

export default Home
