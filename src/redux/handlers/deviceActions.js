// reducers
import deviceReducer from '../reducers/deviceReducer'

// libs
import { detectDevice } from '../../libs/detectDevice'

export const setDeviceConfig = (userAgent) => {
  return (dispatch, state) => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve) => {
      detectDevice(userAgent).then((deviceDetails) => {
        if (!state().device?.device) {
          resolve(dispatch(deviceReducer.actions.setDevice(deviceDetails)))
        }
        return resolve(true)
      })
    })
  }
}
