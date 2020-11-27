import React from 'react'
import PropTypes from 'prop-types'

// Material Ui
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import PersonIcon from '@material-ui/icons/Person'

// Style
import layoutMobileStyle from './LayoutMobileStyle'
import SideMenu from '../sideMenu/SideMenu'
const useStyles = makeStyles((theme) => layoutMobileStyle(theme))

const LayoutMobile = ({ children }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{ justifyContent: 'space-between' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" justify="center" noWrap className={classes.title}>
              <img className={classes.icon} src="/images/background/logo-d4-icon.png" alt="d4 icon" />
              SanctuaryWorld
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open account"
              onClick={() => console.log('open account')}
              edge="start"
              className={clsx(classes.menuRightButton, open && classes.hide)}
            >
              <PersonIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} className={classes.listIcons}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <SideMenu onPageChange={handleDrawerClose} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        { children }
      </main>
    </div>
  )
}

LayoutMobile.propTypes = {
  children: PropTypes.node,
}

export default LayoutMobile
