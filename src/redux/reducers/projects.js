import { createReducer } from '../lib/ReducerHelper'

const initialState = { d4: '0.0.1' }

const projects = createReducer(initialState, {
  GET_PROJECTS: ({ projects }) => projects,
})

export default projects
