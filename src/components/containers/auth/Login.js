import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Next
import Link from 'next/link'
import Image from 'next/image'

// Formik
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

// Components
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'
import FormikFields from '../../commons/forms/FormikFields'
import DiabloResponsiveButton from '../../commons/buttons/DiabloResponsiveButton/DiabloResponsiveButton'
import { getUser } from '../../../redux/handlers/authActions'


const styles = {
  contentContainer: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginTop: '35px',
  },
  separator: {
    marginTop: '10px',
  },
  overflow: {
    overflow: 'hidden',
  },
}

@connect(() => ({}), {
  actionLogin: getUser,
})
class Login extends Component  {

  render() {
    const backgroundColor = '#131210'
    const { actionLogin } = this.props


    return (
      <BodyContainer
        background='/images/background/act1-bg.jpg'
        contentOnCenter
      >
        <div style={styles.contentContainer}>
          <span>
            <Image
              src="/images/background/d4_logo.png"
              alt="diablo 4 logo"
              width={300}
              height={140}
              style={styles.overflow}
            />
          </span>
          <>
            <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
                password: Yup.string()
                  .max(25, 'Must be 25 characters or less')
                  .min(8, 'Must be 8 characters or more')
                  .required('Required'),
              })}
              onSubmit={(values, {setSubmitting}) => {
                if (typeof actionLogin === 'function') {
                  actionLogin(values)
                } else {
                  setSubmitting(false)
                }
              }}>
              {props => (
                <Form style={{...styles.form}}>
                  <FormikFields
                    name="email"
                    type="text"
                    label={`Sanctuary Account Email`}
                    formikProps={props}
                    icon="fa-at"
                    backgroundColor={backgroundColor}
                  />
                  <FormikFields
                    name="password"
                    type="password"
                    label="Password"
                    formikProps={props}
                    icon="fa-key"
                    backgroundColor={backgroundColor}
                  />
                  <div style={styles.button}>
                    <DiabloResponsiveButton text="Sign In" minWidth={170} />
                  </div>
                </Form>
              )}
            </Formik>
          </>
          <div style={styles.separator}>
            or <br/>
            <Link href='/signin'>
              <a>register</a>
            </Link>
          </div>
        </div>
      </BodyContainer>
    )
  }
}

Login.propTypes = {
  battletag: PropTypes.string,
  actionLogin: PropTypes.func,
}

Login.defaultProps = {
  battletag: '',
  actionLogin: () => false,
}

export default Login
