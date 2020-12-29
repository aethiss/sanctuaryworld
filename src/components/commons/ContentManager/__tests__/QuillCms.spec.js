import React from 'react'
import TestRenderer from 'react-test-renderer'
import QuillCMS from '../QuillCMS'


describe('QuillCMS', () => {
  describe('Render', () => {
    it('[QuillCMS] : Render default', () => {
      const testRenderer = TestRenderer.create(<QuillCMS />)
      expect(testRenderer).toMatchSnapshot()
    })
  })
})
