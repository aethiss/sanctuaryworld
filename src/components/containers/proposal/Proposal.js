import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Handler // Actions
import { createProposal } from '../../../redux/handlers/proposalActions'

// Quill Editor
import QuillCMS from '../../commons/ContentManager/QuillCMS'

// Components
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'
import DiabloResponsiveButton from '../../commons/buttons/DiabloResponsiveButton/DiabloResponsiveButton'
import ProposalList from './ProposalList'

// Styles
const proposalTheme = {
  titleContainer: {
    // border: '1px solid red',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '30px',
    marginTop: '10px',
  },
}

@connect(
  (state) => ({
    battletag: state.user?.battletag,
    proposalsList: state.proposal,
  }),
  {
    newProposal: createProposal,
  },
)
class Proposal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newCms: false,
    }
  }

  cmsToggle = () => {
    this.setState({ newCms: !this.state.newCms })
  }

  render() {
    const { proposal, newProposal, proposalsList } = this.props
    const { newCms } = this.state
    return (
      <BodyContainer>
        <div style={proposalTheme.titleContainer}>
          <DiabloResponsiveButton
            text={`${newCms ? 'Delete' : 'New'} ${proposal} Proposal`}
            action={this.cmsToggle}
          />
        </div>
        {newCms && (
          <QuillCMS withTitle={true} action={newProposal} type={proposal} />
        )}
      </BodyContainer>
    )
  }
}

Proposal.propTypes = {
  proposal: PropTypes.string,
  newProposal: PropTypes.func,
  proposalsList: PropTypes.array,
}

export default Proposal
