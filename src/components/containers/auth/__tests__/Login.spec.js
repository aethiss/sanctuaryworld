import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
const mockStore = configureStore([])

import Login from '../Login'

jest.mock('next/image', () => (jest.fn(() => null)))

const mockProps = {
  user: {
    battletag: 'pippo#1234',
    action: jest.fn(),
  }
}

describe('Login', () => {
  describe('Render', () => {
    it('[Login] : Render default', () => {
      const store = mockStore(mockProps)
      const testRenderer = TestRenderer.create(
        <Provider store={store}>
          <Login />
        </Provider>
      )
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
