import React from 'react'

// Components
import DiabloButton from '../buttons/diabloButton/DiabloButton'

// Quill Editor Hook Version
import { useQuill } from 'react-quilljs'

// Styles
const styles = {
  divContainer: {
    backgroundColor: '#FFF',
    // minHeight: '50vh',
    color: 'black',
    width: '90%'
  },
  quillContainer: {
    minHeight: '50vh',
  }
}

// Quill Options
const theme = 'snow'
// const theme = 'bubble'
const modules = {
  toolbar: {
    container: [
      [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'],
      ['code-block'],
      ['link', 'image', 'video'],
    ],
    handlers: {}
  }
}
const placeholder = 'Compose an proposal...'
const formats = ['bold', 'italic', 'underline', 'strike']
// #### End of Quill Options ####

const QuillCMS = () => {
  const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder })

  const imageHandler = () => {
    const range = quill.getSelection()
    // eslint-disable-next-line no-undef
    const value = prompt('please copy paste the image url here.')
    if (value) {
      // quill.insertEmbed(range.index, 'image', value, value)
      quill.insertEmbed(range.index, 'image', 'https://quilljs.com/images/cloud.png')
    }
  }

  React.useEffect(() => {
    if (quill) {
      // quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>')
      console.log('useEffect')
      quill.getModule('toolbar').addHandler('image', imageHandler)
    }
  }, [quill])

  return (
    <>
    <div style={styles.divContainer}>
      <div ref={quillRef} style={styles.quillContainer} />
    </div>
      <div>
        <DiabloButton action={() => true} text='Publish' />
      </div>
    </>
  )
}

export default QuillCMS
