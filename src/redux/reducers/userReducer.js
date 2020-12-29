import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => ({ ...payload }),
    setAuth: (state, { payload }) => ({
      ...state,
      auth: payload.auth,
    }),
    logOutUser: () => initialState
  },
})

export default userReducer
