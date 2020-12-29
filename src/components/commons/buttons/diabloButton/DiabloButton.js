import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// Material-Ui && Styles
import { makeStyles } from '@material-ui/core/styles'
import { OldFenris } from '../../commonStyles/fontFamily'

// Helpers
import { cacheImage } from '../../../../libs/cacheImages'

// Next
import Link from 'next/link'

const initStyles = ({ isDisabled, enableOnOver }) => {
  const baseBackground = () => {
    return isDisabled ?
      {
        background: 'url("/images/buttons/diablo-buttons-disable.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      } :
      {
        background: 'url("/images/buttons/diablo-buttons-base.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }
  }

  const activeOver = (src) => {
    if (enableOnOver || !isDisabled) {
      return {
        background: `url(${src})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }
    }
    return {}
  }

  const styles = {
    base: {
      ...baseBackground(),
      ...OldFenris,
      width: '230px',
      height: '87px',
      padding: '0',
      color: '#FFF',
      border: 'none',
      outline: 'none',
      '&:hover': activeOver('/images/buttons/diablo-buttons-hover.png'),
      '&:active': activeOver('/images/buttons/diablo-buttons-press.png'),
    },
  }

  return makeStyles(styles)
}

const DiabloButton = ({ text, isDisabled, enableOnOver, anchorLink, action }) => {
  const classes = initStyles({ isDisabled, enableOnOver })()

  useEffect(() => {
  const imgs = [
    '/images/buttons/diablo-buttons-disable.png',
    '/images/buttons/diablo-buttons-hover.png',
    '/images/buttons/diablo-buttons-press.png'
  ]
    cacheImage(imgs)
  }, [])

  const renderButton = () => (
    <button
      className={classes.base}
      onClick={action}
    >
      {text}
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

DiabloButton.propTypes = {
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  enableOnOver: PropTypes.bool,
  anchorLink: PropTypes.string,
  action: PropTypes.func,
}

DiabloButton.defaultProps = {
  text: '',
  action: () => {},
}

export default DiabloButton
