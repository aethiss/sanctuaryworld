import { callAPI } from './APIbridge'

// Next
import Router from 'next/router'

// reducers
import userReducer from '../reducers/userReducer'

// Component Helpers
import { ErrorModal } from '../../components/commons/modals/ErrorModal'
import { setCookie } from '../../libs/cookieHelper'

export const setRegisterAccount = (params) => {
  return (dispatch) => {
    // eslint-disable-next-line no-undef
    return new Promise(() => {
      callAPI('auth/local/register', 'POST', { ...params })
        .then(({ data }) => {
          dispatch(userReducer.actions.setAuth({ auth: data.jwt }))
          Router.push('/')
        })
        .catch((err) => {
          ErrorModal(err.data)
        })
    })
  }
}

export const getUser = ({ email, password }) => {
  const paramsConnection = {
    identifier: email,
    password,
  }
  return (dispatch) => {
    // eslint-disable-next-line no-undef
    return new Promise(() => {
      callAPI('auth/local', 'POST', { ...paramsConnection })
        .then(({ data }) => {
          const userData = {
            ...data.user,
            battletag: data.user.username,
            token: false,
            auth: data.jwt
          }
          dispatch(userReducer.actions.setUser(userData))
          setCookie('user', JSON.stringify(userData), 2)
          Router.push('/')
        })
        .catch((err) => {
          ErrorModal(err.data)
        })
    })
  }
}
