import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import Proposals from '../src/components/containers/proposal/Proposals'

// Actions/Handlers
import { getProposals } from '../src/redux/handlers/proposalActions'

class ProposalsPage extends Component {
  render() {
    const { proposals } = this.props
    return <Proposals proposals={proposals} />
  }
}

ProposalsPage.getInitialProps = async (ctx) => {
  const { reduxStore } = ctx

  // eslint-disable-next-line no-unused-vars
  const proposals = await reduxStore.dispatch(getProposals())

  return {
    // proposals: reduxStore.getState().proposals
    proposals: proposals?.payload || []
  }
}

ProposalsPage.propTypes = {
  proposals: PropTypes.object,
}

export default ProposalsPage
