import React from 'react'
import PropTypes from 'prop-types'

// Material-ui
import { makeStyles } from '@material-ui/core/styles'

// Styles
const previewTheme = makeStyles(() => ({
  previewContainer: {
    width: '100%',
    border: '2px solid #283737',
    boxShadow: '0px 0px 10px 3px #283737',
    padding: '3px',
    marginTop: '15px',
    // marginBottom: '25px',
  },
  titleContainer: {
    width: '100%',
    textAlign: 'center',
    '& > h3': {
      padding: '2px',
      marginTop: '2px',
    },
  },
  contentContainer: {
    width: '100%',
    display: 'flex',
    marginTop: '10px',
    '& img': {
      maxWidth: '100%',
    },
    '& p': {
      padding: '1px',
      margin: '1px',
    },
  },
}))

const QuillPreview = ({ HTML, title }) => {
  const classes = previewTheme()

  return (
    <div className={classes.previewContainer}>
      {title && (
        <div className={classes.titleContainer}>
          <h3>{title}</h3>
        </div>
      )}
      <div className={classes.contentContainer}>
        <div dangerouslySetInnerHTML={{ __html: HTML }} />
      </div>
    </div>
  )
}

QuillPreview.propTypes = {
  HTML: PropTypes.string,
  title: PropTypes.string,
}

export default QuillPreview
