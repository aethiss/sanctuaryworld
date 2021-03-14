// Actions/Handlers
import { setDeviceConfig } from '../../src/redux/handlers/deviceActions'
import { getAuthenticatedUser } from '../../src/redux/handlers/authActions'

// Helpers

/* This Function update the Redux-Store foreach Server Side Request! */
export const hydrates = async (req, store) => {
  if (!req) return

  // Setup Device request server side
  const userAgent = req.headers['user-agent']
  await store.dispatch(setDeviceConfig(userAgent))

  // Setup user Details if cookie
  if (req.cookies?.sidToken) {
    console.log('we have token : ', req.cookies.sidToken);
    await store.dispatch(getAuthenticatedUser(req.cookies.sidToken));

  }

  return {}
}
