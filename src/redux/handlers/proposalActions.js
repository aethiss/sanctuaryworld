import { callAPI } from './APIbridge'
import { omit } from 'ramda'

// Reducer
import proposalReducer from '../reducers/proposalReducer'

// Schemas
import { checkProposalSchema } from '../schemas/proposalSchema'

// Helper
import { ErrorModal } from '../../components/commons/modals/ErrorModal'

export const getProposals = () => {
  return (dispatch) => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      callAPI('proposals', 'GET')
        .then(({ data }) => {
          if (data && Array.isArray(data)) {
            const parsedProposal = data.map((val) => {
              return omit(['user'], val)
            })
            resolve(
              dispatch(proposalReducer.actions.setProposal(parsedProposal)),
            )
          }
        })
        .catch((err) => {
          ErrorModal(err.data, err.status, dispatch)
          reject(err)
        })
    })
  }
}

export const createProposal = ({ title, content, type, language }) => {
  return (dispatch, state) => {
    const userId = state().user.id
    const creator = state().user.username
    const params = {
      creator,
      title,
      description: content,
      type,
      language,
      creationDate: Date.now(),
      user: userId,
    }
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      checkProposalSchema(params).then((isValid) => {
        if (!isValid) {
          if (!creator) {
            ErrorModal('Session Timeout', 403)
            return reject({ data: 'Session Timeout', status: 403 })
          }
          ErrorModal('Missed Title or Content', 403)
          return reject({ data: 'Compile Title and Content', status: 403 })
        }
        callAPI('proposals', 'POST', params)
          .then(() => {
            dispatch(getProposals())
            resolve(true)
          })
          .catch((err) => {
            ErrorModal(err.data, err.status, dispatch)
            reject(err)
          })
      })
    })
  }
}

export const findProposalDetails = (proposals = [], id) => {
  // let details = []
  // Object.keys(proposals).map((val) => {
  //   proposals[val].map((item) => {
  //     if (item.id === id) details.push(item)
  //   })
  // })
  //
  // return details[0]
  return proposals.find((val) => val.id === id)
}

export const setProposalByType = (proposals = []) => {
  const typeProposals = {
    world: [],
    pve: [],
    trading: [],
    pvp: [],
  }
  proposals.map((val) => {
    typeProposals[val.type].push(val)
  })

  return typeProposals
}

export const newProposalPost = ({ id, comment }) => {
  return (dispatch, state) => {
    const userId = state().user.id
    const author = state().user.username
    const params = {
      author,
      comment,
      creationDate: Date.now(),
      user: userId,
      proposal: id,
    }
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      callAPI('proposal-discussions', 'POST', params)
        .then(() => {
          dispatch(getProposals())
          resolve(true)
        })
        .catch((err) => {
          console.log('err ', err.data, err.status)
          ErrorModal(err.data, err.status, dispatch)
          reject(err)
        })
    })
  }
}
