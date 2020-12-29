import initializeStore from '../../reduxStore'
let store = initializeStore()

const initialState = []

// Actions/Reducers
import proposalReducer from '../proposalReducer'

describe('Proposal Reducer', () => {
  beforeEach(() => {
    store = initializeStore()
  })
  it('[Proposal] : Should return the initial state', () => {
    expect(store.getState().proposal).toMatchObject(initialState)
  })
  it('[Proposal] : Should return the update proposal list', () => {
    store.dispatch(proposalReducer.actions.setProposal(['pippo', 'franco']))
    expect(store.getState().proposal).toStrictEqual(['pippo', 'franco'])
  })
})
