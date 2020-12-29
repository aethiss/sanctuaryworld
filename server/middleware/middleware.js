import userReducer from '../../src/redux/reducers/userReducer'

import { setDeviceConfig } from '../../src/redux/handlers/deviceActions'

/* This Function update the Redux-Store foreach Server Side Request! */
export const hydrates = async (req, store) => {
  if (!req) return

  // Setup Device request server side
  const userAgent = req.headers['user-agent']
  await store.dispatch(setDeviceConfig(userAgent))

  // Setup user Details if cookie
  if (req.cookies?.user) {
    await store.dispatch(userReducer.actions.setUser(JSON.parse(req.cookies.user)))
  }

  return {}
}
