import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

// Reducer Actions
import { findProposalDetails } from '../../../redux/handlers/proposalActions'

// Components
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'
import DiscussionsContainerResponsive from '../../commons/wrapper/DiscussionsContainerResponsive'

// Helpers
import { dateToString } from '../../../libs/dateHelper'

// Styles
import { OldFenris } from '../../commons/commonStyles/fontFamily'

// Styles
const styles  = {
  proposalContainer: {
    padding: '10px',
    width: '90%',
  },
  proposalTitle: {
    paddingTop: '65px',
    fontSize: '22px',
    textAlign: 'center',
    ...OldFenris,
  },
  proposalCreator: {
    textAlign: 'right',
    fontSize: '11px',
    ...OldFenris,
  },
  proposalContent: {
    marginTop: '25px',
  },
}

// @connect((state) => ({
//   proposals: state.proposal,
// }), {
//   newPost: newProposalPost,
// })
const ProposalDetails = ({ id }) => {
  const proposals = useSelector(state => state.proposal)

  // const { proposals, newPost, id } = this.props
  const proposalDetails = findProposalDetails(proposals, id)
  if (Array.isArray(proposalDetails)) return null

  if (!proposalDetails) {
    return (
      <>
        <p>Error on proposal Request</p>
      </>
    )
  }

    return (
      <BodyContainer>
        <div style={styles.proposalContainer}>
          <div style={styles.proposalTitle}>
            {proposalDetails.title}
          </div>
          <div style={styles.proposalCreator}>
            Created By {proposalDetails.creator.split('#')[0]} <br/>
            at {dateToString(proposalDetails.creationDate)}
          </div>
          <div style={styles.proposalContent}>
            <div dangerouslySetInnerHTML={{__html: proposalDetails.description}} />
          </div>
          <DiscussionsContainerResponsive
            title={`Proposal Discussion - ${proposalDetails.title}`}
            id={proposalDetails.id}
            discussion={proposalDetails.proposal_discussions}
          />
        </div>
      </BodyContainer>
    )
}

ProposalDetails.propTypes = {
  proposals: PropTypes.object,
  newPost: PropTypes.func,
  id: PropTypes.string,
}

export default ProposalDetails
