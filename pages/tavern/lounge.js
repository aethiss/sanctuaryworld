import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Action Reducer
import chatReducer from '../../src/redux/reducers/chatReducer'

// Components
import Lounge from '../../src/components/containers/lounge/Lounge'

// const handleChatCache = (messages, dispatch) => {
//   dispatch(chatReducer.actions.)
// }

@connect((state) => ({
  user: state.user,
  oldMessages: state.chat,
}), {
  setChatCache: chatReducer.actions.setChatCache
})
class LoungePage extends Component {

  render() {
    const { user, setChatCache, oldMessages } = this.props
    return <Lounge
      user={user}
      chatCache={setChatCache}
      oldMessages={oldMessages}
    />
  }
}

LoungePage.propTypes = {
  user: PropTypes.object,
  setChatCache: PropTypes.func,
  oldMessages: PropTypes.array,
}

export default LoungePage
