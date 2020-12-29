import React from 'react'
import { create, act } from 'react-test-renderer'
// import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
const mockStore = configureStore([])

import SignIn from '../SignIn'

const mockProps = {
  user: {
    battletag: 'pippo#1234',
    action: jest.fn(),
  }
}


describe('SignIn', () => {
  describe('Render', () => {
    it('[SignIn] : Render bnet logged user', () => {
      const store = mockStore(mockProps)
      const testRenderer = create(
        <Provider store={store}>
          <SignIn />
        </Provider>
      )
      expect(testRenderer).toMatchSnapshot()
    })
    it('[SignIn] : Render unauthenticated user', () => {
      const store = mockStore({
        battletag: false,
        action: jest.fn(),
      })
      const testRenderer = create(
        <Provider store={store}>
          <SignIn />
        </Provider>
      )
      expect(testRenderer).toMatchSnapshot()
    })
  })
  // TO-DO !!!
  describe('Events', () => {
    it.skip('[SignIn] : On click Register action is called', () => {
      const store = mockStore(mockProps)
      const testRenderer = create(
        <Provider store={store}>
          <SignIn />
        </Provider>
      )
      act(() => {
        console.log(testRenderer.root.findByType('button').props)
      })

      // expect(store.dispatch).toHaveBeenCalledTimes(1)
    })
  })
})
