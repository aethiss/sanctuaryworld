import React from 'react'
import TestRenderer from 'react-test-renderer'
import Proposal from '../Proposal'


describe('Proposal', () => {
  describe('Render', () => {
    it('[Proposal] : Render default', () => {
      const testRenderer = TestRenderer.create(<Proposal proposal='world' />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
