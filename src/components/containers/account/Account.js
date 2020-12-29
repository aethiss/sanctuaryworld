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
  }
}

const AccountPage = ({ user }) => {

  const notAuthenticatedUser = () => (
    <div>
      <p>Sync your Blizzard Account with SanctuaryWorld !</p>
      <span>
        <ButtonDescription anchorLink='/login' text='Sign-In' />
      </span>
    </div>
)

  const blizzardConnect = () => {
    return (
      <div>
        <p>Secure Connect with Blizzard Account</p>
        <DiabloResponsiveButton text='Connect' anchorLink='/api/connect/bnet' />
        <p>Or <Link href='/login'><a style={styles.link}>Login</a></Link> with Sanctuary Account</p>
      </div>
    )
  }

  const sanctuaryAuth = (user) => {
    if (!user.battletag) return null
    return (
      <div>
        { user.auth ? <p>User Authenticated</p> : notAuthenticatedUser() }
      </div>
    )
  }

  return (
    <BodyContainer>
      <div style={styles.container}>
        <Image
          src="/images/background/d4_logo.png"
          alt="diablo 4 logo"
          width={370}
          height={200}
        />
        { user.battletag ?
          <span>
            <p>Connected as {user.battletag} </p>
            { sanctuaryAuth(user) }
          </span> :
          <span>{ blizzardConnect() } <br/>{sanctuaryAuth(user)}</span>
        }
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
