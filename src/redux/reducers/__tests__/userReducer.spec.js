import initializeStore from '../../reduxStore'
let store = initializeStore()

const initialState = {}

const mockUser = {
  sub: "23456543",
  id: 23456543,
  battletag: "Aethiss#1111",
  provider: "bnet",
  token: "EUmAe6TQG4FkLY8fmN2lBbkpVaEeWj9X1d",
  auth: false,
}

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
  it('[user] : Should update jwt token', () => {
    store.dispatch(userReducer.actions.setUser(mockUser))
    store.dispatch(userReducer.actions.setAuth({ auth: 'xcvbxzzzxx' }))
    expect(store.getState().user).toStrictEqual({
      ...mockUser,
      auth: 'xcvbxzzzxx',
    })
  })
})
