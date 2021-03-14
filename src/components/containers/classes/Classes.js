import React from 'react'

// Material-ui
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DiabloButton from '../../commons/buttons/diabloButton/DiabloButton'

const styles = {
  classesContainer: {
    position: 'relative',
  },
  classesSelection: {
    margin: 0,
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    textAlign: 'center'
  },
  classesButtons: {
    marginLeft: '10px',
    padding: '10px',
  }
}

const Classes = () => {
  return (
    <div style={styles.classesContainer}>
      <video key="classes-loop-video" autoPlay loop muted width="100%"
             poster="https://images.blz-contentstack.com/v3/assets/blt3e5d63cd4a9f4f3f/bltbfea4236e6f14849/602442e9c6713d4e7a4d454d/classes-bg-ultra.jpg?format=pjpg&auto=webp&quality=75">
        <source src="https://assets.blz-contentstack.com/v3/assets/blt3e5d63cd4a9f4f3f/blt172e638e8c88b9aa/602442bc5e4a6c4d10dea4b4/classes-bg-loop-ultra.mp4" />
      </video>
      <div style={styles.classesSelection}>
        <ButtonGroup aria-label="outlined primary button group">
          <DiabloButton text="Barbarian" isDisabled enableOnOver anchorLink='/class/barbarian' />
          <DiabloButton text="Rogue" isDisabled enableOnOver anchorLink='/class/rogue' />
          <DiabloButton text="Sorceress" isDisabled enableOnOver anchorLink='/class/sorcerer' />
          <DiabloButton text="Druid" isDisabled enableOnOver anchorLink='/class/druid' />
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Classes
