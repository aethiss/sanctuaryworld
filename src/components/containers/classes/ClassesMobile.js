import React from 'react'

// Next
import Image from 'next/image'

// Wrapper Component
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'

// Styles
import { OldFenris } from '../../commons/commonStyles/fontFamily'
import Link from 'next/link'


// Styles
const styles = {
  divContainer: {
    marginTop: '10%',
    textAlign: 'center',
    ...OldFenris,
  }
}

const characters = [
  {
    name: 'barbarian',
    icon: '/images/classes/barbarian/class-icon-barbarian.png'
  },
  {
    name: 'sorcerer',
    icon: '/images/classes/sorceress/class-icon-sorcerer.png'
  },
  {
    name: 'rogue',
    icon: '/images/classes/rogue/class-icon-rogue.png'
  },
  {
    name: 'druid',
    icon: '/images/classes/druid/class-icon-druid.png'
  },
]

const renderClassLink = (item, k) => (
  <div key={`char-${k}`} style={styles.divContainer}>
    <Link href={`/class/${item.name}`}>
      <a>
        {item.name.toUpperCase()}
        <Image src={item.icon} unsized />
      </a>
    </Link>
  </div>
)

const ClassesMobile = () => {
  return (
    <BodyContainer>
      {
        characters.map((item, k) => {
          return renderClassLink(item, k)
        })
      }
    </BodyContainer>
  )
}

export default ClassesMobile
