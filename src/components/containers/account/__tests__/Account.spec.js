import React from 'react'
import TestRenderer from 'react-test-renderer'
import Account from '../Account'

jest.mock('next/image', () => (jest.fn(() => null)))


describe('Account', () => {
  describe('Render', () => {
    it('[Account] : Render default', () => {
      const testRenderer = TestRenderer.create(<Account />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
