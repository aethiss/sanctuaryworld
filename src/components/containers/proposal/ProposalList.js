import React from 'react'
import PropTypes from 'prop-types'

// Next
import Link from 'next/link'

// Components
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'
import DiabloResponsiveButton from '../../commons/buttons/DiabloResponsiveButton/DiabloResponsiveButton'

// Helpers
import { dateToString } from '../../../libs/dateHelper'

// Material-ui
import { makeStyles } from '@material-ui/core/styles'
import { OldFenris } from '../../commons/commonStyles/fontFamily'
import Chip from '@material-ui/core/Chip'

// Styles
const previewTheme = makeStyles((Theme) => ({
  proposalsContainer: {
    width: '90%',
    minHeight: '10vh',
    display: 'flex',
    flexDirection: 'column',
    // border: '1px solid red',
  },
  proposalWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  proposalHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    padding: '20px',
    justifyContent: 'space-between',
    [Theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  borderTop: {
    backgroundImage: 'url("/images/background/content-separator.png")',
    width: '100%',
    height: '9px',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px',
    ...OldFenris,
  },
  tagContainer: {
    paddingRight: '15px',
  },
  creatorContainer: {
    textAlign: 'right',
    fontSize: '11px',
    [Theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

const ProposalList = ({ proposals }) => {
  const classes = previewTheme()

  return (
    <BodyContainer>
      <div className={classes.proposalHeader}>
        <h5>Proposals List</h5>
        <DiabloResponsiveButton
          text='New Proposal'
          anchorLink='/new-proposal'
        />
      </div>
      {proposals.map((val, key) => {
        return (
          <div key={`proposal-${key}`} className={classes.proposalsContainer}>
            <div className={classes.borderTop} />
            <div className={classes.proposalWrapper}>
              <span className={classes.titleContainer}>
                <span className={classes.tagContainer}>
                  <Chip label={val.type} color='primary' variant='outlined' />
                </span>
                <Link href={`/proposal/details/${val.id}`}>
                  <a>{val.title}</a>
                </Link>
              </span>
              <span className={classes.creatorContainer}>
                Created By {val.creator.split('#')[0]} <br />
                at {dateToString(val.creationDate)}
              </span>
            </div>
          </div>
        )
      })}
    </BodyContainer>
  )
}

ProposalList.propTypes = {
  proposals: PropTypes.array,
}

ProposalList.defaultProps = {
  proposals: [],
}

export default ProposalList
