import React from 'react'
// import PropTypes from 'prop-types'

// Material-ui
import { makeStyles } from '@material-ui/core/styles'
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'
import ButtonDescription from '../../commons/buttons/buttonDescription/ButtonDescription'

// Styles
const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundImage: 'url("/images/background/diablo-sanctuary-map-2.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '88vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url("/images/background/mobile-content-bg.jpg")',
      backgroundSize: '100%',
      backgroundRepeat: 'repeat-y',
      justifyContent: 'flex-start',
      minHeight: '100%',
    },
  },
  wrapperTop: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url("/images/background/mobile-content-top.jpg")',
      backgroundSize: '100%',
      minHeight: '20vh',
      width: '100%',
      display: 'inline',
    },
  },
  wrapperBottom: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url("/images/background/mobile-content-bot.jpg")',
      backgroundSize: '100%',
      minHeight: '30vh',
      width: '100%',
      display: 'inline',
    },
  },
}))

const tmpAction = () => {
  // eslint-disable-next-line no-undef
  if (window) {
    // eslint-disable-next-line no-undef
    window.confirm('Coming Soon')
  }
}

const Clans = () => {
  const classes = useStyles()
  return (
    <BodyContainer>
      <span className={classes.wrapperTop} />
      <div className={classes.wrapper}>
        <ButtonDescription
          text='Register Your Clan'
          action={tmpAction}
        />
      </div>
      <span className={classes.wrapperBottom} />
    </BodyContainer>
  )
}

export default Clans
