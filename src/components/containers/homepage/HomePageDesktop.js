import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import DiabloResponsiveButton from '../../commons/buttons/DiabloResponsiveButton/DiabloResponsiveButton'

// Videos
const introVideo = 'https://d3a5h34gwy5glx.cloudfront.net/assets/media/agegate-background-ultrawide-intro.9e333f400749237bc0aa377cb3664c90.mp4'
const loopVideo = 'https://d3a5h34gwy5glx.cloudfront.net/assets/media/agegate-background-ultrawide.2ffb2a2abafb092f3fe1b01e2de1c8d3.mp4'

const styles = {
  homeContainer: {
    backgroundImage: 'url("/images/background/desktop-home-background-ultrawide.jpg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    position: 'relative',
  },
  buttonContainer: {
    margin: 0,
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    textAlign: 'center'
}
}


const HomePageDesktop = ({ battletag }) => {
  const [clientReady, setClientReady] = useState(false)
  const [videoEnd, setVideoEnd] = useState(false)
  const vidRef = useRef(null)

  const handlePlayVideo = () => {
    vidRef.current.loop = true
  }

  const setNextVideo = () => {
    if (!videoEnd) {
      setVideoEnd(true)
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        handlePlayVideo()
      }, 10)
    }
  }

  useEffect(() => {
    setClientReady(true)
  }, [])

  const renderConnect = () => (
    <>
      <DiabloResponsiveButton text='Connect' anchorLink='/api/connect/bnet' />
    </>
  )

  return (
    <div style={styles.homeContainer}>
      { clientReady &&
        <video key={videoEnd ? loopVideo : introVideo} autoPlay muted width="100%" onEnded={setNextVideo} ref={vidRef}>
          <source src={videoEnd ? loopVideo : introVideo} />
        </video>
      }
      <div style={styles.buttonContainer}>
        { battletag ? (<p>Connected as {battletag}</p>) : renderConnect() }
      </div>
    </div>
  )
}

HomePageDesktop.propTypes = {
  battletag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}

HomePageDesktop.defaultProps = {
  battletag: false,
}

export default HomePageDesktop
