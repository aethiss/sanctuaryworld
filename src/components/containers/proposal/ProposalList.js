import React from 'react'
import PropTypes from 'prop-types'

// Next
import Link from 'next/link'

// Helpers
import { dateToString } from '../../../libs/dateHelper'

// Material-ui
import { makeStyles } from '@material-ui/core/styles'
import { OldFenris } from '../../commons/commonStyles/fontFamily'

// Styles
const previewTheme = makeStyles(() => ({
  proposalsContainer: {
    width: '90%',
    minHeight: '10vh',
    display: 'flex',
    flexDirection: 'column',
  },
  borderTop: {
    backgroundImage: 'url("/images/background/content-separator.png")',
    width: '100%',
    height: '9px',
  },
  titleContainer: {
    padding: '10px',
    ...OldFenris,
  },
  creatorContainer: {
    textAlign: 'right',
    fontSize: '11px',
  }
}))

const ProposalList = ({ proposals }) => {
  const classes = previewTheme()

  return (
    <>
      {
        proposals.map((val, key) => {
          return (
            <div
              key={`proposal-${key}`}
              className={classes.proposalsContainer}
            >
              <span className={classes.borderTop} />
              <span className={classes.titleContainer}>
                <Link href={`/proposal/details/${val.id}`}>
                  <a>{val.title}</a>
                </Link>
              </span>
              <span className={classes.creatorContainer}>
                Created By {val.creator.split('#')[0]} <br/>
                at {dateToString(val.creationDate)}
              </span>
            </div>
          )
        })
      }
    </>
  )
}

ProposalList.propTypes = {
  proposals: PropTypes.array,
}

ProposalList.defaultProps = {
  proposals: [],
}

export default ProposalList
