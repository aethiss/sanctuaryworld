import React from 'react'
import PropTypes from 'prop-types'

// Actions
import { getProposals } from '../../../src/redux/handlers/proposalActions'

// Components
import ProposalDetails from '../../../src/components/containers/proposal/ProposalDetails'

const ProposalDetailPage = ({ id }) =>
  <ProposalDetails id={id}/>

ProposalDetailPage.getInitialProps = async ({ query, reduxStore }) => {
  await reduxStore.dispatch(getProposals())
  return {
    id: query.id || 0,
  }
}

ProposalDetailPage.propTypes = {
  id: PropTypes.string,
}

export default ProposalDetailPage
