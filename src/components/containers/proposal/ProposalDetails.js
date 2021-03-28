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
import { makeStyles } from '@material-ui/core/styles'

// Styles
const styles = makeStyles((theme) => ({
  proposalContainer: {
    padding: '10px',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '2px',
    },
  },
  proposalTitle: {
    paddingTop: '5px',
    fontSize: '22px',
    textAlign: 'center',
    ...OldFenris,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  proposalCreator: {
    textAlign: 'right',
    fontSize: '11px',
    ...OldFenris,
  },
  proposalContent: {
    marginTop: '25px',
    marginBottom: '20px',
  },
}))

const ProposalDetails = ({ id }) => {
  const classes = styles()
  const proposals = useSelector((state) => state.proposal)

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
      <div className={classes.proposalContainer}>
        <div className={classes.proposalTitle}>{proposalDetails.title}</div>
        <div className={classes.proposalCreator}>
          Created By {proposalDetails.creator.split('#')[0]} <br />
          at {dateToString(proposalDetails.creationDate)}
        </div>
        <div className={classes.proposalContent}>
          <div
            dangerouslySetInnerHTML={{ __html: proposalDetails.description }}
          />
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
