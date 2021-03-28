import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
// import Proposals from '../src/components/containers/proposal/Proposals'
import ProposalList from '../src/components/containers/proposal/ProposalList'

// Actions/Handlers
import { getProposals } from '../src/redux/handlers/proposalActions'

class ProposalsPage extends Component {
  render() {
    const { proposals } = this.props
    return <ProposalList proposals={proposals} />
  }
}

ProposalsPage.getInitialProps = async (ctx) => {
  const { reduxStore } = ctx

  // eslint-disable-next-line no-unused-vars
  const proposals = await reduxStore.dispatch(getProposals())

  return {
    // proposals: reduxStore.getState().proposals
    proposals: proposals?.payload || [],
  }
}

ProposalsPage.propTypes = {
  proposals: PropTypes.array,
}

export default ProposalsPage
