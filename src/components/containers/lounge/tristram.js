import React, { useEffect, useRef } from 'react'

// Hooks
import useChat from '../../commons/hooks/useChat'

// styles
import clsx from 'clsx'
import chatStyles from './tristramStyle'
import DiabloContainerResponsive from '../../commons/wrapper/DiabloContainerResponsive'

const Tristram = ({ user, setChatCache, oldMessages }) => {
  const classes = chatStyles()
  const roomId = 'Launge'
  const { messages, sendMessage, setOldMessages } = useChat(
    roomId,
    user?.username,
  )
  const inputRef = useRef(null)
  const lastMsg = useRef(null)

  useEffect(() => {
    if (oldMessages) setOldMessages(oldMessages)
  }, [])

  useEffect(() => {
    if (lastMsg.current !== null) {
      const lastMsgBody = messages[messages.length - 1]
      const previousMsgBody = messages[messages.length - 2]
      if (
        lastMsgBody &&
        lastMsgBody.chatEvent === false &&
        previousMsgBody?.body?.messageBody !== lastMsgBody.body?.messageBody
      ) {
        setChatCache(lastMsgBody)
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

  const renderSectionHeader = () => {
    return null
    /* return (
      <header className={classes.msgerHeader}>
      <div className="msger-header-title">
        <i className="fas fa-comment-alt" /> SimpleChat
      </div>
      <div className="msger-header-options">
        <span><i className="fas fa-cog" /></span>
      </div>
    </header>
    ) */
  }

  const renderMsg = ({ key, user, messageBody, isOwner }) => {
    return (
      <div
        key={`chat-msg-${key}`}
        className={clsx(
          classes.msg,
          isOwner ? classes.rightMsg : classes.leftMsgMsgBubble,
        )}
      >
        <div
          className={classes.msgImg}
          style={{
            backgroundImage: 'url("/images/icons/chat-logo.jpeg")',
          }}
        />
        <div className={classes.msgBubble}>
          <div className={classes.msgInfo}>
            <div className={classes.msgInfoName}>{user}</div>
            <div className={classes.msgInfoTime}>
              {new Date().toISOString().slice(11, 16)}
            </div>
          </div>
          <div className={classes.msgText}>{messageBody}</div>
        </div>
      </div>
    )
  }

  const renderEventMsg = ({ key, messageBody }) => {
    return (
      <div
        key={`chat-msg-${key}`}
        className={clsx(classes.msg, classes.leftMsgMsgBubble)}
      >
        <div className={classes.msgBubble}>
          <div className={classes.msgText}>{messageBody}</div>
        </div>
      </div>
    )
  }

  return (
    <DiabloContainerResponsive>
      <section className={classes.msger}>
        {renderSectionHeader()}
        <main className={classes.msgerChat}>
          {messages.map((message, i) => {
            console.log(message)
            return message.chatEvent
              ? renderEventMsg({
                  key: i,
                  ...message.body,
                  isOwner: message.ownedByCurrentUser,
                })
              : renderMsg({
                  key: i,
                  ...message.body,
                  isOwner: message.ownedByCurrentUser,
                })
          })}
        </main>
        <div className={classes.msgerInputarea}>
          <input
            type='text'
            className={classes.msgerInput}
            placeholder='Enter your message...'
            ref={inputRef}
            onKeyPress={handleKeyPress}
          />
          <button
            type='submit'
            className={classes.msgerSendBtn}
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </section>
    </DiabloContainerResponsive>
  )
}

export default Tristram
