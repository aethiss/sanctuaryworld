import React from 'react'
import TestRenderer from 'react-test-renderer'
import Account from '../Account'

jest.mock('next/image', () => (jest.fn(() => null)))

const mockNotAuth = {
  user: {
    battletag: 'pippi#1123',
    auth: false,
  }
}

const mockAuth = {
  user: {
    battletag: 'pippi#1123',
    auth: 'sadfghjkuytrewqwerty',
  }
}

describe('Account', () => {
  describe('Render', () => {
    it('[Account] : Render default', () => {
      const testRenderer = TestRenderer.create(<Account />)
      expect(testRenderer).toMatchSnapshot()
    })
    it('[Account] : Render connected not authenticated', () => {
      const testRenderer = TestRenderer.create(<Account {...mockNotAuth} />)
      expect(testRenderer).toMatchSnapshot()
    })
    it('[Account] : Render connected and authenticated', () => {
      const testRenderer = TestRenderer.create(<Account {...mockAuth} />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
