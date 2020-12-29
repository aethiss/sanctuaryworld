import { callAPI, getUserId, getBattleTag } from './APIbridge'

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
          resolve(dispatch(proposalReducer.actions.setProposal(setProposalByType(data))))
        })
        .catch((err) => {
          ErrorModal(err.data,  err.status, dispatch)
          reject(err)
        })
    })
  }
}

export const createProposal = ({ title, content, type }) => {
  return (dispatch, state) => {
    const userId = getUserId(state())
    const creator = getBattleTag(state())
    const params = {
      creator,
      title,
      description: content,
      type,
      creationDate: Date.now(),
      user: userId,
    }
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      checkProposalSchema(params)
        .then((isValid) => {
          if (!isValid) {
            if (!creator) {
              ErrorModal('Session Timeout', 403)
              return reject({ data: 'Session Timeout', status: 403 })
            }
            ErrorModal('Missed Title or Content', 403)
            return reject({ data: 'Compile Title and Content', status: 403 })
          }
          callAPI('proposals', 'POST', params, state)
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
  let details = []
  Object.keys(proposals).map((val) => {
    proposals[val].map((item) => {
      if (item.id === id) details.push(item)
    })
  })

  return details[0]
}

export const setProposalByType = (proposals = []) => {
  const typeProposals = {
    world: [],
    pve: [],
    trading: [],
    pvp: []
  }
  proposals.map((val) => {
    typeProposals[val.type].push(val)
  })

  return typeProposals
}

export const newProposalPost = ({ id, comment }) => {
  return (dispatch, state) => {
    const userId = getUserId(state())
    const author = getBattleTag(state())
    const params = {
      author,
      comment,
      creationDate: Date.now(),
      user: userId,
      proposal: id,
    }
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
      callAPI('proposal-discussions', 'POST', params, state)
        .then(() => {
          dispatch(getProposals())
          resolve(true)
        })
        .catch((err) => {
          ErrorModal(err.data, err.status, dispatch)
          reject(err)
        })
    })
  }
}
