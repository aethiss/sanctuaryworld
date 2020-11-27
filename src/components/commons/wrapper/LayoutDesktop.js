import React from 'react'
import PropTypes from 'prop-types'

// Components
import ResponsiveNavBar from '../NavBar/ResponsiveNavBar'

const LayoutDesktop = ({ children }) => {
  return (
    <div style={{ height: '100%' }}>
      <ResponsiveNavBar />
      <div style={{ height: 'inherit' }}>{children}</div>
    </div>
  )
}

LayoutDesktop.propTypes = {
  children: PropTypes.node,
}

export default LayoutDesktop
