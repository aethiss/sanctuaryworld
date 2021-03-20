import Router from 'next/router'
import Swal from 'sweetalert2'

// Actions / Reducer
import userReducer from '../../../redux/reducers/userReducer'

export const ErrorModal = (errorMsg, errorStatus, dispatch = () => false) => {
  const errorText =
    errorMsg === 'Undefined error' && errorStatus === 403
      ? 'You need to be connected in order to perform this action'
      : errorMsg
  // eslint-disable-next-line no-undef
  if (typeof window !== 'undefined') {
    Swal.fire({
      title: 'Error!',
      text: errorText,
      icon: 'error',
      confirmButtonText: 'ok',
    }).then(() => {
      if (errorStatus === 401) {
        dispatch(userReducer.actions.logOutUser())
        Router.push('/account')
      }
    })
  }
}
