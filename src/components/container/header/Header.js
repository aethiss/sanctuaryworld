import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const styleHeader = {
  backgroundColor: '#0d0d0d',
  minHeight: '37px',
  padding: '3px',
}

@connect(
  state => ({
    version: state.projects.d4,
  }),
  {}
)
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDialog: false,
    }
  }

  static propTypes = {
    version: PropTypes.string,
  }

  static defaultProps = {
    version: '1.0.0',
  }

  render() {
    const { version } = this.props
    return <div style={styleHeader}>Header ({version})</div>
  }
}
