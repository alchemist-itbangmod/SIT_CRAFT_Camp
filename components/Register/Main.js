import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import { connect } from 'react-redux'
import { haveRegistration } from '../../utils/firebase'

import Loading from './Loading'
import { actions as appActions } from '../../ducks/app'

import firebase from 'firebase'
import clientCredentials from '../../credentials/client'

import colors from '../Core/colors'
import { darken } from 'polished'

import { Section } from '../Core/Layout'
import Stepper from './Stepper'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const RegisterSection = styled(Section)`
  color: white;
  background: radial-gradient(circle, ${colors.blue} 0, ${darken(0.15, colors.blue)} 120%);
  min-height: 100vh;
  position: relative;

  hr {
    border-top: 1px dashed rgba(255,255,255,.3);
    margin: 40px 0;
  }

  .btn-outline-light.active,
  .btn-outline-light:active,
  .show>.btn-outline-light.dropdown-toggle{
    color: ${colors.blue};
  }
`

const Header = styled.h1`
  font-family: 'PWScratchedFont';
  font-size: 3.2em;
  margin-bottom: .5em;
  padding-top: calc(30px + 5vh);
`

const Detail = styled.div`
  margin: 40px;
`

@connect(
  state => ({
    loading: state.app.loading
  }),
  { ...appActions }
)
class Main extends React.Component {
  componentDidMount() {
    console.log(this.props.loading)
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials)
    }
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        let registration = await haveRegistration(firebase, user)
        if (registration === null) {
          Router.push(`/register?currentStep=${2}`)
          this.props.doneLoading()
        } else {
          Router.push(`/register?currentStep=${3}`)
          this.props.doneLoading()
        }
      } else {
        Router.push(`/register?currentStep=${1}`)
        this.props.doneLoading()
      }
    })
  }

  render() {
    const currentStep = +this.props.url.query.currentStep

    return (
      <RegisterSection>
        <Loading active={this.props.loading} />
        <div className="container">
          <Header className="text-center">SIT CRAFT Camp</Header>
          <Stepper section={currentStep} />
          <Detail>
            { currentStep === 1 && <StepOne /> }
            { currentStep === 2 && <StepTwo /> }
            { currentStep === 3 && <StepThree /> }
          </Detail>
        </div>
      </RegisterSection>
    )
  }
}

export default Main
