import Router from 'next/router'
import Swal from 'sweetalert2'

// Actions / Reducer
import userReducer from '../../../redux/reducers/userReducer'

export const ErrorModal = (errorMsg, errorStatus, dispatch = () => false) => {
  // eslint-disable-next-line no-undef
  if (typeof window !== "undefined") {
    Swal.fire({
      title: 'Error!',
      text: errorMsg,
      icon: 'error',
      confirmButtonText: 'ok'
    }).then(() => {
      if (errorStatus === 401) {
        dispatch(userReducer.actions.logOutUser())
        Router.push('/account')
      }
    })
  }
}
