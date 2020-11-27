import React from 'react'
import PropTypes from 'prop-types'

// Next
import Link from 'next/link'

// Material Ui
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

// Material Ui Icons
import HomeIcon from '@material-ui/icons/Home'
import GroupIcon from '@material-ui/icons/Group'
import AdjustIcon from '@material-ui/icons/Adjust'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ForumIcon from '@material-ui/icons/Forum'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'

// Styles
const styles = {
  listItemIcon: {
    color: '#f8e9d4'
  },
  listItem: {
    fontWeight: 200,
    fontFamily: 'Old Fenris,Volkhov,Vollkorn,Times New Roman,serif',
    textTransform: 'uppercase',
    color: '#f8e9d4'
  },
  iconClose: {
    color: '#f8e9d4',
    float: 'right',
  }
}

const MenuIcon = (iconName) => {
  switch (iconName) {
    case 'Classes':
      return <AdjustIcon />
    case 'Clans':
      return <GroupIcon />
    case 'Proposal':
      return <AnnouncementIcon />
    case 'Account':
      return <AccountCircleIcon />
    case 'Forum':
      return <ForumIcon />
    case 'logout':
      return <ExitToAppIcon />
    default:
      return <HomeIcon />
  }
}

const primaryMenu = [
  { name: 'Home', link: '/', icon: () => MenuIcon('Home') },
  { name: 'Classes', link: '/classes', icon: () => MenuIcon('Classes') },
  { name: 'Clans', link: '/clans', icon: () => MenuIcon('Clans') },
  { name: 'Proposal', link: '/proposal', icon: () => MenuIcon('Proposal') },
]

const secondaryMenu = [
  { name: 'Account', link: '/test', icon: () => MenuIcon('Account') },
  { name: 'Forum', link: '/test', icon: () => MenuIcon('Forum') },
  { name: 'Log Out', link: '/test', icon: () => MenuIcon('logout') },
]

const SideMenu = ({ onPageChange }) => {
  return (
    <>
      <IconButton onClick={onPageChange} style={styles.iconClose}>
        <ChevronLeftIcon />
      </IconButton>
      <List>
        {primaryMenu.map((menu, index) => (
          <Link href={menu.link} key={`${menu}-${index}`}>
            <ListItem button onClick={onPageChange}>
              <ListItemIcon style={styles.listItemIcon}>
                {menu.icon()}
              </ListItemIcon>
              <ListItemText primary={menu.name} style={styles.listItem} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryMenu.map((menu, index) => (
          <Link href={menu.link} key={`${menu}-${index}`}>
            <ListItem button onClick={onPageChange('left', false)}>
              <ListItemIcon style={styles.listItemIcon}>
                {menu.icon()}
              </ListItemIcon>
              <ListItemText primary={menu.name} style={styles.listItem} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  )
}

SideMenu.propTypes = {
  onPageChange: PropTypes.func,
}

export default SideMenu
