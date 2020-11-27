import React from 'react'
import TestRenderer from 'react-test-renderer'
import Clans from '../Clans'


describe('Clans', () => {
  describe('Render', () => {
    it('[Clans] : Render default', () => {
      const testRenderer = TestRenderer.create(<Clans />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
