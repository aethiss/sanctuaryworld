const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'
const USER_CONNECTED_EVENT = 'newUserConnected'

const websockets = (io) => {
  io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`)

    // Join a conversation
    const { roomId } = socket.handshake.query
    socket.join(roomId)

    // Listen for new messages
    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
      io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data)
    })

    socket.on(USER_CONNECTED_EVENT, (data) => {
      io.in(roomId).emit(USER_CONNECTED_EVENT, data)
    })

    // Leave the room if the user closes the socket
    socket.on("disconnect", () => {
      console.log(`Client ${socket.id} diconnected`)
      socket.leave(roomId)
    })
  })
}

// eslint-disable-next-line no-undef
module.exports = websockets
