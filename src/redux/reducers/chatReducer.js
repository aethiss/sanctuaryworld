import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const chatReducer = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatCache: (state, { payload }) => ([...state, payload]),
    resetChatCache: () => initialState
  },
})

export default chatReducer
