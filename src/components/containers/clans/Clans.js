import React from 'react'
// import PropTypes from 'prop-types'

// Material-ui
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'
import ButtonDescription from '../../commons/buttons/buttonDescription/ButtonDescription'

// Styles
import { responsiveMap } from '../../commons/commonStyles/ResponsiveMap'


const tmpAction = () => {
  // eslint-disable-next-line no-undef
  if (window) {
    // eslint-disable-next-line no-undef
    window.confirm('Coming Soon')
  }
}

const Clans = () => {
  const classes = responsiveMap()()
  return (
    <BodyContainer>
      <span className={classes.wrapperTop} />
      <div className={classes.wrapper}>
        <ButtonDescription
          text='Register Your Clan'
          action={tmpAction}
        />
      </div>
      <span className={classes.wrapperBottom} />
    </BodyContainer>
  )
}

export default Clans
