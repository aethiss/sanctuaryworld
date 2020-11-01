import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  device: undefined,
  isPhone: false,
}

const deviceReducer = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDevice: (state, { payload }) => {
      state.device = payload.device
      state.isPhone = payload.isPhone
    },
  },
})

export default deviceReducer
