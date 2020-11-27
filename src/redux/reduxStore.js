import { configureStore } from '@reduxjs/toolkit'

// Actions/reducers
import deviceReducer from './reducers/deviceReducer'
import userReducer from './reducers/userReducer'

const rootReducer = {
  [deviceReducer.name]: deviceReducer.reducer,
  [userReducer.name]: userReducer.reducer,
}

const initializeStore = (initialState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: true,
  })
}

export default initializeStore
