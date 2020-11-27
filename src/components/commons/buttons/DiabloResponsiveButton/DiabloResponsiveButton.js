import React from 'react'
import PropTypes from 'prop-types'

// Next
import Link from 'next/link'

// Material-ui
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(() => ({
  button: {
    display: 'inline-block',
    fontSize: '16px',
    lineHeight: '54px',
    padding: '0 3px',
    position: 'relative',
    textAlign: 'center',
    backgroundColor: '#000',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  buttonMid: {
    background: 'url("/images/buttons/button-game-sprite.png") repeat-x 0 0',
    color: '#f3aa55',
    display: 'block',
    fontFamily: '"Exocet Blizzard Light", "Palatino Linotype", "Times", serif',
    padding: '0 42px',
    position: 'relative',
    textShadow: '0 0 8px #000',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
    '&::after': {
      background: 'url("/images/buttons/button-game-sprite.png") repeat-x 0 -54px',
      content: '',
      height: '54px',
      left: 0,
      opacity: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      transition: 'opacity 0.2s',
      '-webkit-transform': 'translateZ(0)',
    },
    '&:hover': {
      color: '#f4cc9e',
    },
  },
  buttonLeft: {
    background: 'url("/images/buttons/button-game-sprite.png") no-repeat 0 -108px',
    height: '54px',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '51px',
    zIndex: 1,
  },
  buttonRight: {
    background: 'url("/images/buttons/button-game-sprite.png") no-repeat 0 -162px',
    height: '54px',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '51px',
    zIndex: 1,
  },
  buttonText: {
    position: 'relative',
    zIndex: 1,
  },
}))

const DiabloResponsiveButton = ({ text, anchorLink, action }) => {
  const classes = useStyles()

  const renderButton = () => (
    <button
      className={classes.button}
      onClick={action}
    >
      <span className={classes.buttonLeft} />
      <span className={classes.buttonMid}>
        <span className={classes.buttonText}>{text}</span>
      </span>
      <span className={classes.buttonRight} />
    </button>
  )

  return (
    <>
      { anchorLink ? (
        <Link href={anchorLink}>
          <a>
            {renderButton()}
          </a>
        </Link>
      ) : renderButton() }
    </>
  )
}

DiabloResponsiveButton.propTypes = {
  text: PropTypes.string,
  anchorLink: PropTypes.string,
  action: PropTypes.func,
}

export default DiabloResponsiveButton
