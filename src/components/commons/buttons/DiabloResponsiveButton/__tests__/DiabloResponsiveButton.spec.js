import React from 'react'
import TestRenderer from 'react-test-renderer'
import DiabloResponsiveButton from '../DiabloResponsiveButton'

describe('DiabloResponsiveButton', () => {
  describe('Render', () => {
    it('[DiabloResponsiveButton] : Render default', () => {
      const testRenderer = TestRenderer.create(<DiabloResponsiveButton />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
