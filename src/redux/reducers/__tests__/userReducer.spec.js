import initializeStore from '../../reduxStore'
let store = initializeStore()

const initialState = {}

const mockUser = { sub: "104883907", id: 104883907, battletag: "Aethiss#2441", provider: "bnet", token: "EUmAe6TQG4FkLY8fmN2lBbkpVaEeWj9X1d" }

// Actions/Reducers
import userReducer from '../userReducer'

describe('user reducer', () => {
  beforeEach(() => {
    store = initializeStore()
  })
  it('[user] : Should return the initial state', () => {
    expect(store.getState().user).toMatchObject(initialState)
  })
  it('[user] : Should return the update device details', () => {
    store.dispatch(userReducer.actions.setUser(mockUser))
    expect(store.getState().user).toStrictEqual(mockUser)
  })
  it('[user] : Should return empty state if logout', () => {
    store.dispatch(userReducer.actions.setUser(mockUser))
    store.dispatch(userReducer.actions.logOutUser())
    expect(store.getState().user).toStrictEqual({})
  })
})
