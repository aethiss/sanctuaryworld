import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import { newProposalPost } from '../../../redux/handlers/proposalActions'

// Material-Ui & Styles
import { makeStyles } from '@material-ui/core/styles'
import { OldFenris } from '../commonStyles/fontFamily'
import QuillCMS from '../ContentManager/QuillCMS'

const useStyles = makeStyles((theme) => ({
  discussionsContainer: {
    border: '2px solid #283737',
    boxShadow: '0px 0px 90px 9px #283737',
    width: '100%',
    backgroundImage:
      'url("/images/background/discussions-bg.jpg"), url("/images/background/discussions-repeat-bg.jpg")',
    backgroundRepeat: 'no-repeat, repeat-y',
    backgroundPosition: 'top',
    backgroundPositionY: '-200px',
    display: 'flex',
    flexDirection: 'column',
  },
  discussionTitle: {
    padding: '15px',
    ...OldFenris,
    fontSize: '16px',
  },
  discussionContent: {
    borderTop: '1px solid #283737',
    margin: 'auto',
    width: '70%',
    padding: '20px 10px 20px 10px',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      padding: '10px 5px 10px 5px',
    },
  },
  discussionPost: {
    paddingBottom: '20px',
    paddingTop: '10px',
    borderBottom: '1px solid #283737',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '5px',
    },
  },
  postAuthor: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '12px',
  },
  postContent: {
    paddingTop: '15px',
    textAlign: 'justify',
    textJustify: 'inter-word',
    lineHeight: '1.6',
  },
  answerContainer: {
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const DiscussionsContainerResponsive = ({ title, id, discussion = [] }) => {
  const [loading, setLoading] = useState(false)
  const _dispatch = useDispatch()
  const classes = useStyles()
  const getAuthorName = (author) => author?.split('#')[0] || ''

  const renderContent = (posts = []) => {
    if (!Array.isArray(posts) || !posts.length) {
      return <div>Write the first post !</div>
    }

    return posts.map((post, k) => {
      return (
        <div key={`post-discussion-${k}`} className={classes.discussionPost}>
          <div className={classes.postAuthor}>
            <span>
              posted by <u>{getAuthorName(post.author)}</u>
            </span>
          </div>
          <div
            className={classes.postContent}
            dangerouslySetInnerHTML={{ __html: post.comment }}
          />
        </div>
      )
    })
  }

  const handleAction = ({ comment }) => {
    if (comment !== '') {
      setLoading(true)
      _dispatch(newProposalPost({ id, comment })).then(() => {
        setLoading(false)
      })
    }
  }

  if (loading) return null

  return (
    <div className={classes.discussionsContainer}>
      <div className={classes.discussionTitle}>{title}</div>
      <div className={classes.discussionContent}>
        {renderContent(discussion)}
      </div>
      <div className={classes.answerContainer}>
        <QuillCMS type='post' action={handleAction} />
      </div>
    </div>
  )
}

DiscussionsContainerResponsive.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  action: PropTypes.func,
  discussion: PropTypes.array,
}

DiscussionsContainerResponsive.defaultProps = {
  title: 'Discussion',
}

export default DiscussionsContainerResponsive
