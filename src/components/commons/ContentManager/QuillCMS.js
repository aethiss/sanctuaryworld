import React, { useState, useRef, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import Router from 'next/router'

// Components
import DiabloButton from '../buttons/diabloButton/DiabloButton'
import QuillPreview from './QuillPreview'

// Quill Editor
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill')
    // eslint-disable-next-line react/prop-types,react/display-name
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />
  },
  {
    ssr: false,
  },
)

// Styles
const styles = {
  titleContainer: {
    margin: '10px',
    width: '90%',
  },
  inputTitle: {
    height: '25px',
    width: '100%',
  },
  divContainer: {
    backgroundColor: '#FFF',
    minHeight: '50vh',
    color: 'black',
    width: '90%',
  },
  quillContainer: {
    minHeight: '50vh',
  },
}

const QuillCMS = ({ action, type, withTitle = false }) => {
  const [preview, setPreview] = useState(false)
  const [currentHTML, setHTML] = useState('')
  const [title, setTitle] = useState('')
  const reactQuillRef = useRef()
  let quillRef

  useEffect(() => {
    const init = (quill) => {
      quillRef = quill.getEditor()
    }
    const check = () => {
      if (reactQuillRef.current) {
        init(reactQuillRef.current)
        return
      }
      // eslint-disable-next-line no-undef
      setTimeout(check, 200)
    }
    check()
  }, [])

  const imageHandler = (val) => {
    if (val) {
      const position = quillRef.getSelection()
      // eslint-disable-next-line no-undef
      const url = prompt('please copy paste the image url here.')
      if (url) {
        quillRef.insertEmbed(position.index, 'image', url)
      }
    }
  }

  // Quill Options
  const modules = useMemo(
    () => ({
      toolbar: {
        container:
          type === 'post'
            ? [
                [{ header: '2' }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                ['code-block'],
                ['link'],
              ]
            : [
                [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }],
                // [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['clean'],
                ['code-block'],
                ['link', 'image', 'video'],
              ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  )

  const handlePreview = () => setPreview(!preview)
  const hideEditor = () => (preview ? 'none' : 'block')

  const handleAction = () => {
    if (!!currentHTML === false) return
    if (type === 'post') {
      action({ comment: currentHTML })
      return
    }
    action({ title, content: currentHTML, type }).then(() => {
      Router.push(`/proposals`)
    })
  }

  return (
    <>
      {withTitle && (
        <div style={{ ...styles.titleContainer, display: hideEditor() }}>
          <input
            style={styles.inputTitle}
            type='text'
            placeholder='Proposal Title'
            value={title}
            onChange={(ele) => {
              setTitle(ele.target.value)
            }}
          />
        </div>
      )}
      <div style={{ ...styles.divContainer, display: hideEditor() }}>
        <ReactQuill
          forwardedRef={reactQuillRef}
          value={currentHTML}
          onChange={setHTML}
          theme='snow'
          placeholder='Write here your content ...'
          modules={modules}
        />
      </div>
      {preview && <QuillPreview HTML={currentHTML} title={title} />}
      {type === 'post' ? (
        <div>
          <DiabloButton action={handleAction} text='Post' />
        </div>
      ) : (
        <div>
          <DiabloButton
            action={handlePreview}
            text={preview ? 'Editor' : 'Preview'}
          />
          {preview && <DiabloButton action={handleAction} text='Publish' />}
        </div>
      )}
    </>
  )
}

QuillCMS.propTypes = {
  action: PropTypes.func,
  type: PropTypes.string,
  withTitle: PropTypes.bool,
}

export default QuillCMS
