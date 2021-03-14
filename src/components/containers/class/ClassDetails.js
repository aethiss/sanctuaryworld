import React from 'react'
import PropTypes from 'prop-types'

// Libs
import YouTube from 'react-youtube'

// Component Wrapper
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'

// styles
import { OldFenris } from '../../commons/commonStyles/fontFamily'
const styles =  makeStyles((theme) => ({
  divContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    textJustify: 'inter-word',
    padding: '3%',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '88vh',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
    },
  },
  title: {
    ...OldFenris,
  },
  video: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
      minWidth: '100%',
      minHeight: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      objectFit: 'cover',
    },
  },
  content: {
    zIndex: '1000',
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
  },
  contentRight: {
    alignSelf: 'flex-end',
    zIndex: '1000',
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
  },
  videoContainer: {
    border: '2px solid #2d250d',
    boxShadow: '0px 0px 10px 0px #2d250d',
  },
}))

import { charactersDescriptions } from './CharactersDescriptions'
import { makeStyles } from '@material-ui/core/styles'

const ClassDetails = ({ className }) => {
  const classes = styles()
  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  }

  return  (
    <BodyContainer>
      <div className={classes.divContainer}>
        <video
          autoPlay
          muted
          loop
          className={classes.video}
        >
          <source src={charactersDescriptions[className]?.videoMp4} type="video/mp4" />
          <source src={charactersDescriptions[className]?.videoWeb} type="video/webm" />
        </video>
        <div className={className === 'barbarian' ? classes.contentRight : classes.content}>
          <h1 className={classes.title}>{className.toUpperCase()}</h1>
          <p>{charactersDescriptions[className]?.description}</p>
          <div className={classes.videoContainer}>
            <YouTube videoId={charactersDescriptions[className]?.youTubeId} opts={opts} />
          </div>
        </div>
      </div>
    </BodyContainer>
  )
}

ClassDetails.propTypes = {
  className: PropTypes.string
}

export default ClassDetails
