import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Layouts Components
import LayoutResponsive from './LayoutResponsive'

@connect((state) => ({
  device: state.device,
}), {})
class Wrapper extends Component {

  render() {
    const { children, device } = this.props
    return (
      <div className={device?.isPhone ? 'sw-mobile': 'sw-desktop'} style={{ minHeight: '88%' }}>
        <LayoutResponsive>{children}</LayoutResponsive>
      </div>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node,
  device: PropTypes.object,
}

export default Wrapper
