import React from 'react'
import PropTypes from 'prop-types'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Components
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'
import DiabloResponsiveButton from '../../commons/buttons/DiabloResponsiveButton/DiabloResponsiveButton'
import ButtonDescription from '../../commons/buttons/buttonDescription/ButtonDescription'

// Style
const styles = {
  container: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'underline',
  },
}

const AccountPage = ({ user }) => {
  const blizzardConnect = () => {
    return (
      <div style={styles.container}>
        <p>Secure Connect with Blizzard Account</p>
        <p>
          This is a secure connection using oAuth2 (
          <a href='https://oauth.net/2/' target='_blank'>
            <u>read more</u>
          </a>
          )
        </p>
        <DiabloResponsiveButton
          text='BATTLE.NET'
          anchorLink='/api/connect/bnet'
        />
      </div>
    )
  }

  return (
    <BodyContainer background='/images/background/act1-bg.jpg'>
      <div style={styles.container}>
        <Image
          src='/images/background/d4_logo.png'
          alt='diablo 4 logo'
          width={370}
          height={200}
        />
        {user.battletag ? (
          <p>Connected as {user.battletag} </p>
        ) : (
          blizzardConnect()
        )}
      </div>
    </BodyContainer>
  )
}

AccountPage.propTypes = {
  user: PropTypes.object,
}

AccountPage.defaultProps = {
  user: {},
}

export default AccountPage
