import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import MobileNavBar from '../MobileNavBar'

import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

describe('MobileNavBar', () => {
  it('[MobileNavBar] Default render', () => {
    const renderedValue = createMount()(
      // Code of this component - <BtnIcon /> you can find above
      <MobileNavBar openMenu={jest.fn()} />
    )
    expect(renderedValue.html()).toMatchSnapshot()
  })
})
