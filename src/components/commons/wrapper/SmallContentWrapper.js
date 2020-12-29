import React from 'react'
import PropTypes from 'prop-types'

// Material-ui
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(() => ({
  wrapperTop: {
    backgroundImage: 'url("/images/background/mobile-content-top.jpg")',
    backgroundSize: '100%',
    minHeight: '20vh',
    width: '350px',
    display: 'inline',
    textAlign: 'center',
  },
  topText: {
    paddingTop: '60px',
  },
  wrapper: {
    backgroundImage: 'url("/images/background/mobile-content-bg.jpg")',
    backgroundSize: '100%',
    backgroundRepeat: 'repeat-y',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '350px',
    minHeight: '100%',
  },
  wrapperBottom: {
    backgroundImage: 'url("/images/background/mobile-content-bot.jpg")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    minHeight: '30vh',
    width: '350px',
    display: 'inline',
  },
}))

const SmallContentWrapper = ({ children, title }) => {
  const classes = useStyles()
  return (
    <>
      <span className={classes.wrapperTop}>
        <h3 className={classes.topText}>{ title }</h3>
      </span>
      <div className={classes.wrapper}>
        {children}
      </div>
      <span className={classes.wrapperBottom} />
    </>
  )
}

SmallContentWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

SmallContentWrapper.defaultProps = {
  children: <span />,
  title: '',
}

export default SmallContentWrapper
