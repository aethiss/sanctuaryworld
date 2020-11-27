import React from 'react'
import PropTypes from 'prop-types'

// Next
import Link from 'next/link'

// Material-Ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
// import MailIcon from '@material-ui/icons/Mail'
// import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#181717',
    backgroundImage: 'url("/images/background/bg-content-top.jpg")',
  },
  divider: {
    height: '32px',
    backgroundImage: 'url("/images/background/heading-divider-top.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    borderTop: '1px solid #171E21',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  growCenter: {
    flexGrow: 1,
    // paddingLeft: '4%',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Old Fenris,Volkhov,Vollkorn,Times New Roman,serif',
    textTransform: 'uppercase',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  icon: {
    width: '25px',
    position: 'relative',
    top: '5px',
    right: '10px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

const ResponsiveNavBar = ({ openMenu }) => {
  const classes = useStyles()
  const [menuMoreAnchorEl, setMenuMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(menuMoreAnchorEl)

  const handleMenuClose = () => {
    setMenuMoreAnchorEl(null)
  }

  const handleMenuOpen = (event) => {
    setMenuMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <>
      <Menu
        id={mobileMenuId}
        anchorEl={menuMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
      </Menu>
    </>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={openMenu('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.growCenter}>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link href='/'>
                <a>
                  <img className={classes.icon} src="/images/background/logo-d4-icon.png" alt="d4 icon" />
                  SanctuaryWorld
                </a>
              </Link>
            </Typography>
          </div>
          <div className={classes.sectionDesktop}>
            {/*<IconButton aria-label="show 4 new mails" color="inherit">*/}
            {/*  <Badge badgeContent={4} color="secondary">*/}
            {/*    <MailIcon />*/}
            {/*  </Badge>*/}
            {/*</IconButton>*/}
            {/*<IconButton aria-label="show 17 new notifications" color="inherit">*/}
            {/*  <Badge badgeContent={17} color="secondary">*/}
            {/*    <NotificationsIcon />*/}
            {/*  </Badge>*/}
            {/*</IconButton>*/}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <div className={classes.divider} />
    </div>
  )
}

ResponsiveNavBar.propTypes = {
  openMenu: PropTypes.func,
}

ResponsiveNavBar.defaultProps = {
  openMenu: () => {},
}

export default ResponsiveNavBar
