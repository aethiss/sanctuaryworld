import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// Hook Helper
import useChat from '../../commons/hooks/useChat'
import DiabloContainerResponsive from '../../commons/wrapper/DiabloContainerResponsive'

// Components
import DiabloResponsiveButton from '../../commons/buttons/DiabloResponsiveButton/DiabloResponsiveButton'

// Styles
import useStyles from './LoungeStyle'

const Lounge = ({ user, chatCache, oldMessages }) => {
  const roomId = 'Launge'
  const { messages, sendMessage, setOldMessages } = useChat(roomId, user?.username)
  // const [newMessage, setNewMessage] = React.useState("")
  const inputRef = useRef(null)
  const lastMsg = useRef(null)
  const classes = useStyles()

  const readableName = (userName) => userName?.split('#')[0] || 'unknown'

  // const handleNewMessageChange = (event) => {
  //   setNewMessage(event.target.value)
  // }
  useEffect(() => {
    if (oldMessages) setOldMessages(oldMessages)
  }, [])

  useEffect(() => {
    if (lastMsg.current !== null) {
      const lastMsgBody = messages[messages.length - 1]
      const previousMsgBody = messages[messages.length - 2]
      if (lastMsgBody && lastMsgBody.chatEvent === false &&
        previousMsgBody?.body?.messageBody !== lastMsgBody.body?.messageBody) {
        chatCache(lastMsgBody)
      }
      lastMsg.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [messages])

  const handleSendMessage = () => {
    const newMessage = inputRef.current.value
    if (newMessage !== '') {
      sendMessage({ messageBody: newMessage, user: user.username })
      inputRef.current.value = ''
    }
  }

  const handleKeyPress = (event) => {
    const key = event.key
    if (key === 'Enter') {
      handleSendMessage()
    }
  }

  if (!user?.username) {
    return (
      <DiabloContainerResponsive>
        <section className={classes.messageContainer}>
          <p>Please Connect / Authenticate to Join in the Lounge chat</p>
          <DiabloResponsiveButton text='Connect' anchorLink='/account' />
        </section>
      </DiabloContainerResponsive>
    )
  }

  return (
    <DiabloContainerResponsive>
        <section className={classes.messageContainer}>
          {
            messages.map((message, i) => {
              if (message.chatEvent) {
                return (
                  <div
                    key={`chat-msg-${i}`}
                    className={classes.bubble}
                    ref={messages.length - 1 === i ? lastMsg : null}
                  >
                    <span className={classes.eventMessage}>{message.body.messageBody}</span>
                  </div>
                )
              }
              return message.ownedByCurrentUser ?
                (<div
                  key={`chat-msg-${i}`}
                  className={classes.bubble}
                  ref={messages.length - 1 === i ? lastMsg : null}
                >
                  <span className={classes.textNameLeft}>{message.body.user}</span>
                  <p className={classes.bubbleLeft}>
                    <span className={classes.bubbleText}>{message.body.messageBody}</span>
                  </p>
                </div>) :
                (<div
                  key={`chat-msg-${i}`}
                  className={classes.bubble}
                  ref={messages.length - 1 === i ? lastMsg : null}
                >
                  <span className={classes.textNameRight}>{message.body.user}</span>
                  <p className={classes.bubbleRight}>
                    <span className={classes.bubbleText}>{message.body.messageBody}</span>
                  </p>
                </div>)
            })
          }
        </section>
        <section className={classes.form}>
          <input
            ref={inputRef}
            type='text'
            placeholder='insert your message...'
            onKeyPress={handleKeyPress}
          />
          <input
            type="button"
            value="Send"
            onClick={handleSendMessage}
          />
        </section>
    </DiabloContainerResponsive>
  )
}

Lounge.propTypes = {
  user: PropTypes.object,
  chatCache: PropTypes.func,
  oldMessages: PropTypes.array,
}


export default Lounge
