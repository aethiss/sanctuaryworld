import React from 'react'

// Tester
import { Provider } from 'react-redux'
import TestRenderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
const mockStore = configureStore([])

// Component
import HomePage from '../HomePage'

const desktopProps = {
  device: 'desktop',
  isPhone: false,
}


describe('HomePage Component', () => {
  describe('Render', () => {
    it('[HomePage] Default render desktop', () => {
      const store = mockStore({
        device: desktopProps,
        battletag: 'aethiss',
      })
      const testRenderer = TestRenderer.create(
        <Provider store={store}>
          <HomePage />
        </Provider>,
      )
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
