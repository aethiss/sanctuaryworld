const fetch = require('node-fetch')
import connections from '../../constants/connections'

export function addSkill(skill) {
  return {
    type: 'SET_USER',
    skill,
  }
}

export function addNewSkill(skill, token) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      fetch(`${connections.HOST}:${connections.PORT}/api/skill`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({ skill, token }),
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.errno) {
            reject({ error: 'sql error', msg: data.code })
          } else {
            console.log('skill added !', data)
            // dispatch(addSkill(data))
            // resolve(data)
          }
        })
        .catch(err => {
          reject({ msg: 'errore :(', error: err })
        })
    })
  }
}
