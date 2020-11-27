import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

// Material-ui
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import SideMenu from '../sideMenu/SideMenu'


// Components
import ResponsiveNavBar from '../NavBar/ResponsiveNavBar'
// import MobileNavBar from '../NavBar/MobileNavBar'


const useStyles = makeStyles({
  list: {
    width: 250,
    height: '100%',
    backgroundColor: '#000',
    color: '#FFF',
    backgroundImage: 'url("/images/background/d4-background-mobile.jpg")',
  },
  fullList: {
    width: 'auto',
    height: '100%',
    backgroundColor: '#000',
    color: '#FFF',
    backgroundImage: 'url("/images/background/d4-background-mobile.jpg")',
  },
})

const LayoutResponsive = ({ children }) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SideMenu onPageChange={toggleDrawer} />
    </div>
  )

  return (
    <>
      <ResponsiveNavBar openMenu={toggleDrawer} />
      <SwipeableDrawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
      {children}
    </>
  )
}

LayoutResponsive.propTypes = {
  children: PropTypes.node,
}

export default LayoutResponsive
