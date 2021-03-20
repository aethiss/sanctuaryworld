import React from 'react'
import PropTypes from 'prop-types'

// Material-Ui
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = (background, contentOnCenter) =>
  makeStyles(() => ({
    bodyWrapper: {
      width: '95%',
      minHeight: '88vh',
      border: '2px solid #283737',
      boxShadow: '0px 0px 90px 9px #283737',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: contentOnCenter ? 'center' : 'flex-start',
      margin: 'auto',
      backgroundImage: background
        ? `url("${background}")`
        : 'url("/images/background/bg-content-top.jpg")',
      backgroundSize: background ? 'cover' : 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'center',
      // backgroundPositionY: 'center',
      backgroundColor: '#12110F',
    },
  }))

const BodyContainer = ({ children, background, contentOnCenter }) => {
  const classes = useStyles(background, contentOnCenter)()
  return (
    <div className={classes.bodyWrapper}>
      {children || <div>Empty Content</div>}
    </div>
  )
}

BodyContainer.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  contentOnCenter: PropTypes.bool,
}

export default BodyContainer
