import initializeStore from '../../reduxStore'
let store = initializeStore()

const initialState = {
  device: undefined,
  isPhone: false,
}

// Actions/Reducers
import device from '../deviceReducer'

describe('device reducer', () => {
  beforeEach(() => {
    store = initializeStore()
  })
  it('[device] : Should return the initial state', () => {
    expect(store.getState().device).toMatchObject(initialState)
  })
  it('[device] : Should return the update device details', () => {
    const phoneDevice = { device: 'phone', isPhone: true }
    store.dispatch(device.actions.setDevice(phoneDevice))
    expect(store.getState().device).toStrictEqual({
      device: 'phone',
      isPhone: true,
    })
  })
})
