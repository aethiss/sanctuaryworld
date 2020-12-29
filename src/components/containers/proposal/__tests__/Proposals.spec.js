import React from 'react'
import TestRenderer from 'react-test-renderer'
import Proposals from '../Proposals'


describe('Proposals', () => {
  describe('Render', () => {
    it('[Proposals] : Render default', () => {
      const testRenderer = TestRenderer.create(<Proposals proposals={['ciao', 'pippo']} />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
