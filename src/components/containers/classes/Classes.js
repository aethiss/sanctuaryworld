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
      <video key="classes-loop-video" autoPlay loop muted width="100%">
        <source src="https://d3a5h34gwy5glx.cloudfront.net/assets/media/classes-bg-loop-ultra.40931d6dfc85ffaca3d9010051b0d648.mp4" />
      </video>
      <div style={styles.classesSelection}>
        <ButtonGroup aria-label="outlined primary button group">
          <DiabloButton text="Barbarian" isDisabled enableOnOver anchorLink='/class/barbarian' />
          <DiabloButton text="Sorceress" isDisabled enableOnOver anchorLink='/class/sorcerer' />
          <DiabloButton text="Druid" isDisabled enableOnOver anchorLink='/class/druid' />
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Classes
