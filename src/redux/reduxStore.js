import { configureStore } from '@reduxjs/toolkit'

// Actions/reducers
import deviceReducer from './reducers/deviceReducer'
import userReducer from './reducers/userReducer'
import proposalReducer from './reducers/proposalReducer'
import chatReducer from './reducers/chatReducer'

const rootReducer = {
  [deviceReducer.name]: deviceReducer.reducer,
  [userReducer.name]: userReducer.reducer,
  [proposalReducer.name]: proposalReducer.reducer,
  [chatReducer.name]: chatReducer.reducer,
}

const initializeStore = (initialState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: true,
  })
}

export default initializeStore
