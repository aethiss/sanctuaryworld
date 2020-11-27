import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import Classes from '../src/components/containers/classes/Classes'
import ClassesMobile from '../src/components/containers/classes/ClassesMobile'

class ClassesPage extends Component {
  render() {
    const { device } = this.props
    return device?.isPhone ? <ClassesMobile /> : <Classes />
  }
}

ClassesPage.getInitialProps = async (ctx) => {
  const { reduxStore } = ctx
  return { device: reduxStore.getState().device }
}

ClassesPage.propTypes = {
  device: PropTypes.object,
}

export default ClassesPage
