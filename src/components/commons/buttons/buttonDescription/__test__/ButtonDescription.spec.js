import React from 'react'
import TestRenderer from 'react-test-renderer'
import ButtonDescription from '../ButtonDescription'

describe('ButtonDescription', () => {
  describe('Render', () => {
    it('[ButtonDescription] : Render default', () => {
      const testRenderer = TestRenderer.create(<ButtonDescription />)
      expect(testRenderer).toMatchSnapshot()
    })
    it('[ButtonDescription] : Render anchor', () => {
      const customProps = {
        anchorLink: '/',
        text: 'test',
      }
      const testRenderer = TestRenderer.create(<ButtonDescription {...customProps} />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
