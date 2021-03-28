import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'next/router'

// Handler // Actions
import { createProposal } from '../../../redux/handlers/proposalActions'

// Components
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'
import QuillCMS from '../../commons/ContentManager/QuillCMS'
import DiabloResponsiveButton from '../../commons/buttons/DiabloResponsiveButton/DiabloResponsiveButton'

// Helper
import { getListProposalType } from '../../../libs/proposalsHelper'

// Styles
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
const useStyle = makeStyles((Theme) => ({
  proposalWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
    padding: '30px',
    marginTop: '10px',
    [Theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '5px',
      marginTop: '5px',
    },
  },
  topHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    [Theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '1px',
      marginTop: '5px',
      fontSize: '13px',
    },
  },
}))

const ProposalNew = () => {
  const classes = useStyle()
  const _dispatch = useDispatch()
  const listOfProposalType = getListProposalType()
  const username = useSelector((state) => state.user?.username)

  const [typeSelected, setTypeSelected] = useState(0)
  const [langSelected, setLangSelected] = useState('ITA')
  const [menuMoreAnchorEl, setMenuMoreAnchorEl] = useState(null)
  const isMobileMenuOpen = Boolean(menuMoreAnchorEl)
  const handleMenuClose = () => {
    setMenuMoreAnchorEl(null)
  }
  const handleMenuOpen = (event) => {
    setMenuMoreAnchorEl(event.currentTarget)
  }
  const handleSelectType = (value) => {
    setTypeSelected(value)
    handleMenuClose()
  }

  const handleProposalAction = ({ title, content, type }) => {
    // console.log('handleProposalAction', title, content, type)
    // console.log(langSelected, listOfProposalType[typeSelected].name)
    _dispatch(
      createProposal({
        title,
        content,
        type: listOfProposalType[typeSelected].name,
        language: langSelected,
      }),
    ).then(() => {
      Router.push('/proposals')
    })
  }

  if (!username) {
    return (
      <BodyContainer>
        <br />
        <p>You need to be connected to create a new Proposal</p>
        <br />
        <DiabloResponsiveButton anchorLink='/account' text='Connect' />
      </BodyContainer>
    )
  }

  return (
    <BodyContainer>
      <div className={classes.proposalWrapper}>
        <div className={classes.topHeader}>
          <div>
            Tag:{' '}
            <Chip
              size='small'
              label={listOfProposalType[typeSelected].name}
              variant='outlined'
              onClick={handleMenuOpen}
              style={{
                color: listOfProposalType[typeSelected].color,
                borderColor: listOfProposalType[typeSelected].color,
              }}
            />
            <Menu
              anchorEl={menuMoreAnchorEl}
              open={isMobileMenuOpen}
              onClose={handleMenuClose}
            >
              {listOfProposalType.map((val, key) => {
                return (
                  <MenuItem
                    value={val.name}
                    selected={key === typeSelected}
                    key={key}
                    onClick={() => handleSelectType(key)}
                  >
                    <Chip
                      size='small'
                      label={val.name}
                      variant='outlined'
                      style={{
                        color: val.color,
                        borderColor: val.color,
                      }}
                    />
                  </MenuItem>
                )
              })}
            </Menu>
          </div>
          <div>
            Language:{' '}
            <Chip
              size='small'
              label='ITA'
              variant='outlined'
              onClick={() => {
                setLangSelected('ITA')
              }}
              avatar={<Avatar alt='Natacha' src='images/icons/italy.png' />}
              style={{
                color: langSelected === 'ITA' ? 'white' : 'grey',
                borderColor: langSelected === 'ITA' ? 'white' : 'grey',
              }}
            />{' '}
            <Chip
              size='small'
              label='ENG'
              variant='outlined'
              onClick={() => {
                setLangSelected('ENG')
              }}
              avatar={
                <Avatar alt='Natacha' src='images/icons/united-kingdom.png' />
              }
              style={{
                color: langSelected === 'ENG' ? 'white' : 'grey',
                borderColor: langSelected === 'ENG' ? 'white' : 'grey',
              }}
            />
          </div>
        </div>

        <div>
          <QuillCMS
            withTitle={true}
            action={handleProposalAction}
            type='proposal'
          />
        </div>
      </div>
    </BodyContainer>
  )
}

export default ProposalNew
