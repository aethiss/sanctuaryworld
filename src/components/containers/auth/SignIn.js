import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Actions
import { setRegisterAccount } from '../../../redux/handlers/authActions'

// Forms
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikFields from '../../commons/forms/FormikFields'

// Components
import BodyContainer from '../../commons/wrapper/BodyContainerResponsive'
import DiabloResponsiveButton from '../../commons/buttons/DiabloResponsiveButton/DiabloResponsiveButton'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginTop: '35px',
  },
}

@connect((state) => ({
  battletag: state.user?.battletag,
}), {
  actionRegister: setRegisterAccount,
})
class SignIn extends Component {

  render() {
    const { battletag, actionRegister } = this.props
    const backgroundColor = '#131210'

    if (!battletag) {
      return (
        <BodyContainer
          background='/images/background/act1-bg.jpg'
          contentOnCenter
        >
          <>
            <p>You need to be connected with your Blizzard Account</p>
            <DiabloResponsiveButton text='Connect' anchorLink='/api/connect/bnet' />
            <p>Secure Login with Blizzard Account</p>
          </>
        </BodyContainer>
      )
    }

    return (
      <BodyContainer
        background='/images/background/act1-bg.jpg'
        contentOnCenter
      >
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .max(25, 'Must be 25 characters or less')
              .min(8, 'Must be 8 characters or more')
              .required('Required'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Confirm Password is required'),
            acceptTerms: Yup.bool().oneOf([true], 'Accept Ts & Cs is required'),
          })}
          onSubmit={(values, {setSubmitting}) => {
            actionRegister({ ...values, username: battletag })
            setSubmitting(false)
          }}>
          {props => (
            <Form style={{...styles.form}}>
              <FormikFields
                name="email"
                type="text"
                label="Email"
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
              <FormikFields
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                formikProps={props}
                backgroundColor={backgroundColor}
              />
              <FormikFields
                name="acceptTerms"
                type="checkbox"
                label="Terms & Conditions"
                formikProps={props}
                backgroundColor={backgroundColor}
              />
              <div style={styles.button}>
                { !battletag ?
                  <DiabloResponsiveButton text="Account" minWidth={170} anchorLink='/account' /> :
                  <DiabloResponsiveButton text="Register" minWidth={170} />
                }
              </div>
            </Form>
          )}
        </Formik>
      </BodyContainer>
    )
  }

}

SignIn.propTypes = {
  battletag: PropTypes.string,
  actionRegister: PropTypes.func,
}

export default SignIn
