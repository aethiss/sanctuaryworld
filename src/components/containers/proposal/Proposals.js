import React from 'react'
import PropTypes from 'prop-types'

// Components
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'

// Styles
import { responsiveMap } from '../../commons/commonStyles/ResponsiveMap'
import ButtonDescription from '../../commons/buttons/buttonDescription/ButtonDescription'

const calculateTotalProposals = (proposalObj) => {
  let total = 0
  Object.keys(proposalObj).map((type) => {
    total += proposalObj[type].length
  })

  return total
}

const Proposals = ({ proposals }) => {
  const classes = responsiveMap('column', 'center', '/images/background/diablo4-proposal-bg.jpg')()
  return (
    <BodyContainer >
      <span className={classes.wrapperTop} />
      <div className={classes.wrapper}>
        <h3>Total Proposals : {calculateTotalProposals(proposals)}</h3>
        <ButtonDescription
          text='World & Story'
          anchorLink='/proposal/world'
        />
        <ButtonDescription
          text='Classes & PVE'
          anchorLink='/proposal/pve'
        />
        <ButtonDescription
          text='Trading & Crafting'
          anchorLink='/proposal/trading'
        />
        <ButtonDescription
          text='PVP & Combat'
          anchorLink='/proposal/pvp'
        />
      </div>
      <span className={classes.wrapperBottom} />
    </BodyContainer>
  )
}

Proposals.propTypes = {
  proposals: PropTypes.object,
}

export default Proposals
