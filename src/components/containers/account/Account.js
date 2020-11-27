import React from 'react'

// Next
import Image from 'next/image'

// Components
import DiabloButton from '../../commons/buttons/diabloButton/DiabloButton'

// Style
const styles = {
  container: {
    textAlign: 'center',
    backgroundImage: 'url("/images/background/d4-background-mobile.jpg")',
    height: '100%'
  }
}

const AccountPage = () => {

  const blizzardConnect = () => {
    return (
      <div>
        <p>Secure Connect with Blizzard Account</p>
        <DiabloButton text="Connect Account" anchorLink='/api/connect/bnet' />
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <p>Account</p>
      <div>
        <Image
          src="/images/background/d4_logo.png"
          alt="diablo 4 logo"
          unsized
        />
      </div>
      {blizzardConnect()}
    </div>
  )
}

export default AccountPage
