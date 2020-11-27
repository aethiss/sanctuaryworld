import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const deviceReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => ({ ...payload }),
    logOutUser: () => initialState
  },
})

export default deviceReducer
