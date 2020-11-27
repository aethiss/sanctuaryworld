import React from 'react'
import HomePageMobile from '../HomePageMobile'
import TestRenderer from 'react-test-renderer'

describe('DiabloButton Component', () => {
  describe('Render', () => {
    it('[HomePageMobile] Default render', () => {
      const testRenderer = TestRenderer.create(<HomePageMobile />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
