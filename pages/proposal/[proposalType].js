import React from 'react'
import PropTypes from 'prop-types'

// Components
import Proposal from '../../src/components/containers/proposal/Proposal'

const ProposalPage = ({ proposalType }) => <Proposal proposal={proposalType}/>

ProposalPage.getInitialProps = async ({ query }) => (
  {
    proposalType: query?.proposalType || 'world',
  }
)

ProposalPage.propTypes = {
  proposalType: PropTypes.string
}

export default ProposalPage
