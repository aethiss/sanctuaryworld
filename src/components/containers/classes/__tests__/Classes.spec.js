import React from 'react'
import TestRenderer from 'react-test-renderer'

// Component
import Classes from '../Classes'

describe('Classes', () => {
  describe('Render', () => {
    it('[Classes]: Default Render Classes', () => {
      const testRenderer = TestRenderer.create(<Classes />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
