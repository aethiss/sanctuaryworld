// Styles
import { makeStyles } from '@material-ui/core/styles'

export const responsiveMap = (direction = 'column', justify = 'flex-end', background) =>
  makeStyles((theme) => ({
  wrapper: {
    backgroundImage: background ? `url("${background}")` : 'url("/images/background/diablo-sanctuary-map-2.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '88vh',
    width: '100%',
    display: 'flex',
    flexDirection: direction || 'column',
    justifyContent: justify || 'flex-end',
    alignItems: 'center',
    paddingBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url("/images/background/mobile-content-bg.jpg")',
      backgroundSize: '100%',
      backgroundRepeat: 'repeat-y',
      justifyContent: 'flex-start',
      minHeight: '100%',
    },
  },
  wrapperTop: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url("/images/background/mobile-content-top.jpg")',
      backgroundSize: '100%',
      minHeight: '20vh',
      width: '100%',
      display: 'inline',
    },
  },
  wrapperBottom: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url("/images/background/mobile-content-bot.jpg")',
      backgroundSize: '100%',
      minHeight: '30vh',
      width: '100%',
      display: 'inline',
    },
  },
}))
