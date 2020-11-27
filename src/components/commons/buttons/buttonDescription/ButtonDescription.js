import React from 'react'
import PropTypes from 'prop-types'

// Next
import Link from 'next/link'

// Material-ui && Styles
import { makeStyles } from '@material-ui/core/styles'
import { OldFenris } from '../../commonStyles/fontFamily'

const useStyles = makeStyles(() => ({
  button: {
    background: 'url("/images/buttons/button-interactive.png") no-repeat',
    backgroundPosition: '0 0',
    height: '133px',
    width: '280px',
    border: 'none',
    outline: 'none',
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      backgroundPosition: '0 -132px',
    }
  },
  buttonText: {
    ...OldFenris,
    color: '#d0c3c3',
    fontSize: '16px',
    position: 'absolute',
    width: '100px',
    marginLeft: '-31px',
    marginTop: '-10px',
  }
}))

const ButtonDescription = ({ text, anchorLink, action }) => {
  const classes = useStyles()

  const renderButton = () => (
    <button
      className={classes.button}
      onClick={action}
    >
      <span className={classes.buttonText}>{text}</span>
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

ButtonDescription.propTypes = {
  text: PropTypes.string,
  anchorLink: PropTypes.string,
  action: PropTypes.func,
}

export default ButtonDescription
