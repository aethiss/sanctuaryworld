// Material-Ui
import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles'

const chatStyles = makeStyles((Theme) => ({
  chatContainer: {
    display: 'flex',
    justifyContent: 'center',
    // minHeight: '88vh',
    // minHeight: '55vh',
    // [Theme.breakpoints.down('sm')]: {
    //   minHeight: '28vh',
    // },
  },
  msger: {
    display: 'flex',
    flex: 1,
    flexFlow: 'column wrap',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '867px',
    borderRadius: '5px',
    boxShadow: '0 15px 15px -5px rgba(0, 0, 0, 0.2)',
  },
  msgerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid green',
    background: '#eee',
    color: '#666',
  },
  msgerChat: {
    flex: '1',
    overflowY: 'auto',
    padding: '10px',
    // backgroundColor: "#FFF"
  },
  msg: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '10px',
  },
  msgLastOfType: {
    margin: '0',
  },
  msgImg: {
    width: '30px',
    height: '30px',
    margin: '10px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '50%',
  },
  msgBubble: {
    maxWidth: '450px',
    padding: '5px',
    borderRadius: '15px',
    border: `1px solid ${fade('#4c535a', 0.4)}`,
  },
  msgInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '12px',
  },
  msgInfoName: {
    marginRight: '10px',
    fontWeight: 'bold',
  },
  msgInfoTime: {
    fontSize: '0.85em',
  },
  msgText: {
    fontSize: '12px',
  },
  leftMsgMsgBubble: {
    borderBottomLeftRadius: '0',
  },
  rightMsg: {
    flexDirection: 'row-reverse',
  },
  rightMsgMsgBubble: {
    borderBottomRightRadius: '0',
  },
  rightMsgMsgImg: {
    margin: '0 0 0 10px',
  },
  msgerInputarea: {
    display: 'flex',
    padding: '5px',
  },
  msgerInput: {
    flex: '1',
    background: '#a9a2a2',
  },
  msgerSendBtn: {
    marginLeft: '10px',
    background: 'rgb(231,69,69)',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.23s',
    '&:hover': {
      background: 'rgb(180,0,0)',
    },
  },
}))

export default chatStyles
