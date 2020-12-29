// Material-Ui
import { makeStyles } from '@material-ui/core/styles'

//
import { OldFenris } from '../../commons/commonStyles/fontFamily'

const useStyles = makeStyles(() => ({
  messageContainer: {
    display: 'flex',
    flex: '1 1 85%',
    flexDirection: 'column',
    minHeight: '79vh',
    maxHeight: '79vh',
    padding: '5px',
    margin: 'auto',
    overflow: 'auto',
    width: '60%',
    color: '#FFF',
  },
  eventMessage: {
    color: '#3d7c17',
    ...OldFenris,
    fontSize: '11px',
  },
  bubble: {
    // flex: '1 1 auto',
    clear: 'both',
    fontSize: '14px',
  },
  bubbleText: {
    // opacity: 1,
    color: '#FFF',
    ...OldFenris,
    fontSize: '14px',
  },
  textNameLeft: {
    float: 'left',
    fontSize: '11px',
  },
  textNameRight: {
    float: 'right',
    fontSize: '11px',
  },
  bubbleLeft: {
    backgroundColor: '#544d4d',
    // opacity: '0.5',
    float: 'left',
    borderRadius: '5px',
    padding: '6px',
    margin: '13px -12px',
    maxWidth: '80%',  /* this will make it not exceed 80% and then wrap */
    position: 'relative',
    transition: 'background-color 0.5s',
    "&::before": {
      content: '""',
      position: 'absolute',
      width: 0,
      height: 0,
      left: '-8px',
      top: '8px',
      borderTop: '4px solid transparent',
      borderRight: '8px solid #544d4d',
      borderBottom: '4px solid transparent'
    }
  },
  bubbleRight: {
    backgroundColor: '#544d4d',
    // opacity: '0.5',
    float: 'right',
    borderRadius: '5px',
    padding: '6px',
    margin: '13px -15px',
    maxWidth: '80%',  /* this will make it not exceed 80% and then wrap */
    position: 'relative',
    transition: 'background-color 0.5s',
    "&::after": {
      content: '""',
      position: 'absolute',
      width: 0,
      height: 0,
      right: '-8px',
      bottom: '8px',
      borderTop: '4px solid transparent',
      borderLeft: '8px solid #544d4d',
      borderBottom: '4px solid transparent'
    }
  },
  form: {
    display: 'flex',
    flex: '0 0 32px',
    justifyContent: 'center',
    margin: 'auto',
    width: '60%',
    height: '80px',
    backgroundImage: 'url("/images/background/fantasy-separator.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    "& > input[type=text]": {
      width: '100%',
      height: '22px',
      outline: 'none',
    },
    "& > input[type=button]": {
      flex: '0 0 10%',
      marginLeft: '3px',
      height: '22px',
      outline: 'none',
    },
  },
}))

export default useStyles
