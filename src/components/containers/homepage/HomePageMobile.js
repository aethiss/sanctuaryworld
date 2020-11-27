import React from 'react'
import PropTypes from 'prop-types'

// Components
import DiabloButton from '../../commons/buttons/diabloButton/DiabloButton'

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    padding: '5%',
    backgroundImage: 'url("/images/background/homepage-background-mobile.jpg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    marginBottom: '80%',
  },
  loginContainer: {
    display: 'flex',
    marginBottom: '80%',
  }
}

const loginRender = (battletag) => (
  <div style={styles.loginContainer}>
    <div>
      Connected as {battletag}
    </div>
  </div>
)

const connectButton = () => (
  <div style={styles.buttonContainer}>
    <DiabloButton text='Connect' anchorLink='/account' />
  </div>
)

const HomePageMobile = ({ battletag }) => {
  return (
    <div style={styles.container}>
      { battletag ? loginRender(battletag) : connectButton() }
    </div>
  )
}

HomePageMobile.propTypes = {
  battletag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ])
}

HomePageMobile.defaultProps = {
  battletag: false,
}

export default HomePageMobile
