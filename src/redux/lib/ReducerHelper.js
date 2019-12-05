/*
  Reducer Helper functions
 */

export function createReducer(initialState, handlers) {
  return function reducer(state, action) {
    const newState = state === undefined ? initialState : state

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](newState, action)
    }

    return newState
  }
}
