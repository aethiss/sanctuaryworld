/* eslint-disable react/prop-types */
import React from 'react'

// Formik
import {ErrorMessage, Field} from 'formik'

const FormikFields = props => {
  const {
    label,
    name,
    type,
    icon,
    backgroundColor,
    formikProps: {errors, touched},
  } = props

  const fieldStyle = errors[name] && touched[name] ?
    type === 'checkbox' ? styles.checkboxError : styles.fieldError :
    type === 'checkbox' ? styles.checkbox : styles.field

  const containerStyle = type === 'checkbox' ? styles.containerRow : styles.containerColumn

  return (
    <div style={{...styles.container, ...containerStyle}}>
      <label htmlFor={name} style={styles.label}>
        {label}
      </label>
      <div style={styles.containerRow}>
        {icon && <i className={`fa ${icon}`} style={{...styles.icon}} />}
        <Field name={name} type={type} style={{ ...fieldStyle, backgroundColor}} />
      </div>
      <ErrorMessage name={name} component="div" style={styles.error} />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
    width: '95%',
  },
  containerColumn: {
    flexDirection: 'column',
  },
  containerRow: {
    flexDirection: 'row',
  },
  label: {
    fontSize: '18px',
    paddingBottom: '7px',
  },
  icon: {
    justifySelf: 'center',
  },
  field: {
    width: '275px',
    height: '35px',
    border: '2px solid #ccc',
    boxShadow: '0px 0px 9px 3px #ccc',
    color: '#FFF',
    opacity: '0.7'
  },
  checkbox: {
    opacity: '0.7'
  },
  checkboxError: {
    opacity: '0.7'
  },
  fieldError: {
    width: '300px',
    height: '35px',
    border: '1px solid #DD0D1A',
    boxShadow: '0px 0px 9px 3px #DD0D1A',
    color: '#FFF',
  },
  error: {
    fontSize: '16px',
    color: '#DD0D1A',
  },
}

export default FormikFields
