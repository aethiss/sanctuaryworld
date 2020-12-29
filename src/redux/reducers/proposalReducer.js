import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  world: [],
  pve: [],
  trading: [],
  pvp: []
}

const proposalReducer = createSlice({
  name: 'proposal',
  initialState,
  reducers: {
    setProposal: (state, { payload }) => (payload)
  },
})

export default proposalReducer
