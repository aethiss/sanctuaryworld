import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import HomePageMobile from './HomePageMobile'
import HomePageDesktop from './HomePageDesktop'

@connect((state) => ({
  device: state.device,
  battletag: state.user?.battletag,
}), {})
class HomePage extends Component {

  render() {
    const { device, battletag } = this.props
    return (
      <>
        {device?.isPhone ?
          <HomePageMobile battletag={battletag} /> :
          <HomePageDesktop battletag={battletag} />
        }
      </>
    )
  }
}

HomePage.propTypes = {
  device: PropTypes.object,
  battletag: PropTypes.string,
}

export default HomePage
