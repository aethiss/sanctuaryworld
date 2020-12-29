import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import AccountPage from '../src/components/containers/account/Account'

class Account extends Component {
  render() {
    const { user } = this.props
    return <AccountPage user={user} />
  }
}

Account.getInitialProps = async (ctx) => {
  const { reduxStore } = ctx
  return { user: reduxStore.getState().user }
}

Account.propTypes = {
  user: PropTypes.object,
}

export default Account
