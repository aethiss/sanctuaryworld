import React from 'react'
import PropTypes from 'prop-types'

// Material-Ui
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(() => ({
  bodyWrapper: {
    width: '95%',
    minHeight: '88vh',
    border: '2px solid #283737',
    boxShadow: '0px 0px 90px 9px #283737',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 'auto',
    backgroundImage: 'url("/images/background/bg-content-top.jpg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#12110F'
  },
}))

const BodyContainer = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.bodyWrapper}>
      {children || <div>Empty Content</div>}
    </div>
  )
}

BodyContainer.propTypes = {
  children: PropTypes.node,
}

export default BodyContainer
