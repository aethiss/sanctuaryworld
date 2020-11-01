import { configureStore } from '@reduxjs/toolkit'

// Actions/reducers
import deviceReducer from './reducers/deviceReducer'

const rootReducer = {
  [deviceReducer.name]: deviceReducer.reducer,
}

const initializeStore = (initialState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: true,
  })
}

export default initializeStore
