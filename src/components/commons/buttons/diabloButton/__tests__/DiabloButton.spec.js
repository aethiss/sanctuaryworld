import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

import DiabloButton from '../DiabloButton'

describe('DiabloButton Component', () => {
  describe('Render', () => {
    it('[DiabloButton] Default render', () => {
      const testRenderer = createMount()(<DiabloButton />)
      expect(testRenderer).toMatchSnapshot()
      // const testInstance = testRenderer.root
      // const button = testInstance.findByType('button')
      // expect(button?.props?.style).toMatchObject({
      //   background: 'url("images/buttons/diablo-buttons-base.png")'
      // })
    })
    it.skip('[DiabloButton] Render disabled button', () => {
      const testRenderer = createMount()(<DiabloButton isDisabled={true} />)
      const testInstance = testRenderer.root
      const button = testInstance.findByType('button')
      expect(button?.props?.style).toMatchObject({
        background: 'url("/images/buttons/diablo-button-disable.png") no-repeat'
      })
    })
  })
})
