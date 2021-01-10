import { useEffect, useRef, useState } from "react"
import socketIOClient from "socket.io-client"

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'
const USER_CONNECTED_EVENT = 'newUserConnected'
const SOCKET_SERVER_URL = "http://www.sanctuaryworld.org"
// const SOCKET_SERVER_URL = "http://localhost:3000"

const useChat = (roomId, battletag = 'unknown') => {
  const [messages, setMessages] = useState([])
  const socketRef = useRef(null)

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    })

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
        chatEvent: false,
      }
      setMessages((messages) => [...messages, incomingMessage])
    })

    socketRef.current.on(USER_CONNECTED_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: false,
        chatEvent: true,
      }
      setMessages((messages) => [...messages, incomingMessage])
    })

    const init = () => {
      if (socketRef !== null) {
        // eslint-disable-next-line no-undef
        sendNewUserConnected(battletag)
        return
      }
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        init()
      }, 300)
    }
    init()

    // eslint-disable-next-line no-undef
    if (window) {
      // eslint-disable-next-line no-undef
      window.onbeforeunload = function(){
        userDisconnected(battletag)
      }
    }

    return () => {
      userDisconnected(battletag)
    }
  }, [roomId])

  const sendMessage = ({ messageBody, user }) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: { user, messageBody },
      senderId: socketRef.current.id,
    })
  }

  const sendNewUserConnected = (battletag) => {
    const messageBody = `${battletag} joined on ${roomId}, Diablo minions grow stronger`
    socketRef.current.emit(USER_CONNECTED_EVENT, {
      body: { battletag, messageBody },
      senderId: socketRef.current.id,
    })
  }

  const userDisconnected = (battletag) => {
    const messageBody = `${battletag} leave, Diablo minions weaken`
    socketRef.current.emit(USER_CONNECTED_EVENT, {
      body: { battletag, messageBody },
      senderId: socketRef.current.id,
    })
    socketRef.current.disconnect()
  }

  const setOldMessages = (messages) => {
    setMessages(messages)
  }

  return { messages, sendMessage, setOldMessages }
}

export default useChat
