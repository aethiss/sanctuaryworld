import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import ResponsiveNavBar from '../ResponsiveNavBar'

import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

describe('ResponsiveNavBar', () => {
  it('[ResponsiveNavBar] Default render', () => {
    const renderedValue = createMount()(
      <ResponsiveNavBar openMenu={jest.fn()} />
    )
    expect(renderedValue.html()).toMatchSnapshot()
  })
})
