import React from 'react'
import PropTypes from 'prop-types'

// Components
import ClassDetails from '../../src/components/containers/class/ClassDetails'

const ClassPage = ({ className }) => <ClassDetails className={className} />

ClassPage.getInitialProps = async ({ query }) => (
  {
    className: query?.className || 'barbarian',
  }
)

ClassPage.propTypes = {
  className: PropTypes.string
}

export default ClassPage
