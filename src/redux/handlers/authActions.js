import { callAPI } from './APIbridge'

// reducers
import userReducer from '../reducers/userReducer'

// Helpers
import { ErrorModal } from '../../components/commons/modals/ErrorModal'
import { eraseCookie } from '../../libs/cookieHelper'

// export const setRegisterAccount = (params) => {
//   return (dispatch) => {
//     // eslint-disable-next-line no-undef
//     return new Promise(() => {
//       callAPI('auth/local/register', 'POST', { ...params })
//         .then(({ data }) => {
//           dispatch(userReducer.actions.setAuth({ auth: data.jwt }))
//           Router.push('/')
//         })
//         .catch((err) => {
//           ErrorModal(err.data)
//         })
//     })
//   }
// }

// export const getUser = ({ email, password }) => {
//   const paramsConnection = {
//     identifier: email,
//     password,
//   }
//   return (dispatch) => {
//     // eslint-disable-next-line no-undef
//     return new Promise(() => {
//       callAPI('auth/local', 'POST', { ...paramsConnection })
//         .then(({ data }) => {
//           const userData = {
//             ...data.user,
//             battletag: data.user.username,
//             token: false,
//             auth: data.jwt
//           }
//           dispatch(userReducer.actions.setUser(userData))
//           setCookie('user', JSON.stringify(userData), 2)
//           Router.push('/')
//         })
//         .catch((err) => {
//           ErrorModal(err.data)
//         })
//     })
//   }
// }

export const getAuthenticatedUser = (token = '') => async (dispatch) => {
  await callAPI('users/me', 'GET', {}, token)
    .then(({ data }) => {
      const user = {
        id: data._id,
        username: data.username,
        auth: token,
      }
      dispatch(userReducer.actions.setUser(user))
    })
    .catch((err) => {
      console.warn(err)
      ErrorModal(err.data)
    })
}

export const logoutUser = () => (dispatch) => {
  dispatch(userReducer.actions.logOutUser())
  eraseCookie()
}
