import React from 'react'
import PropTypes from 'prop-types'

// Next
import Image from 'next/image'

// Material-Ui
import { makeStyles } from '@material-ui/core/styles'

const useStyles = (background) => makeStyles((theme) => ({
  bodyContainer: {
    width: '95%',
    margin: 'auto',
    position: 'relative',
    minHeight: '88vh',
    border: '2px solid #283737',
    boxShadow: '0px 0px 90px 9px #283737',
    backgroundImage: background ? `url("${background}")` : 'url("/images/background/diablo-black-background.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FFF',
    opacity: '0.8',
  },
  lifeOrb: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  lifeSpirit: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))

const DiabloWrapper = ({ children, background }) => {
  const classes = useStyles(background)()
  return (
    <div className={classes.bodyContainer}>
      {children}
      <Image
        src='/images/background/orbs/life.gif'
        alt='orb life'
        className={classes.lifeOrb}
        unsized
      />
      <Image
        src='/images/background/orbs/orb-spirit.gif'
        alt='orb life'
        className={classes.lifeSpirit}
        unsized
      />
    </div>
  )
}

DiabloWrapper.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
}

export default DiabloWrapper
