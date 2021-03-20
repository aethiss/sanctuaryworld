import React from 'react'
import PropTypes from 'prop-types'

// Next
// import Image from 'next/image'

// Material-Ui
import { makeStyles } from '@material-ui/core/styles'

const useStyles = (background) =>
  makeStyles((theme) => ({
    bodyContainer: {
      // display: "flex",
      justifyContent: 'center',
      minHeight: '88vh',
      width: '95%',
      margin: 'auto',
      display: 'flex',
      border: '2px solid #283737',
      boxShadow: '0px 0px 90px 9px #283737',
      backgroundImage:
        'url("/images/background/discussions-bg.jpg"), url("/images/background/discussions-repeat-bg.jpg")',
      backgroundRepeat: 'no-repeat, repeat-y',
      backgroundPosition: 'top',
      backgroundPositionY: '-200px',
      [theme.breakpoints.down('sm')]: {
        minHeight: '71vh',
      },
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
      {/*<Image*/}
      {/*  src='/images/background/orbs/life.gif'*/}
      {/*  alt='orb life'*/}
      {/*  className={classes.lifeOrb}*/}
      {/*  unsized*/}
      {/*/>*/}
      {/*<Image*/}
      {/*  src='/images/background/orbs/orb-spirit.gif'*/}
      {/*  alt='orb life'*/}
      {/*  className={classes.lifeSpirit}*/}
      {/*  unsized*/}
      {/*/>*/}
    </div>
  )
}

DiabloWrapper.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
}

export default DiabloWrapper
