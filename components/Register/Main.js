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
  transition: all 1s;
  background: radial-gradient(circle, ${colors.blue} 0, ${darken(0.15, colors.blue)} 120%);

  min-height: 100vh;
  position: relative;

  hr {
    border-top: 1px dashed rgba(255,255,255,.3);
    margin: 40px 0;
  }

  .btn-outline-light.active,
  .btn-outline-light:active,
  .btn-outline-light:focus,
  .show>.btn-outline-light.dropdown-toggle{
    color: ${colors.blue};
  }

  .btn-outline-light:hover {
    color: #777;
    background-color: rgba(255,255,255,0.8);
  }
`

const Header = styled.h1`
  font-family: 'PWScratchedFont';
  font-size: 3.2em;
  margin-bottom: .5em;
  margin-bottom: 0;

  @media(max-width: 768px) {
    font-size: 2em;
  }
`

const Subtitle = styled.p`
  font-family: 'PWScratchedFont';
  text-align: center;

  span {
    display: block;
    font-size: 1.2em;

    &.small {
      font-size: .6em;
    }
  }
`

const Detail = styled.div`
  margin: 40px;

  @media(max-width: 768px) {
    margin: 15px;
  }
`

@connect(
  state => ({
    loading: state.app.loading,
    team: state.register.team
  }),
  { ...appActions }
)
class Main extends React.Component {
  componentDidMount() {
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
    /* eslint-disable */
    console.log("%c SIT CRAFT Camp. ", "background: #ddd; color: #336699; font-size: 26px; font-style: italic; font-weight:700")
    console.log("if you inspect our code. you can see our repository in Github if you come in SIT CRAFT Camp. Join us ! https://craft.sitchallenge.com/register")
    console.log("%c## Powered by Alchemist @SIT, KMUTT ##", "font-style: italic")
    /* eslint-enable */

    const currentStep = +this.props.url.query.currentStep

    return (
      <RegisterSection team={this.props.team}>
        <Loading active={this.props.loading} />
        <div className="container">
          <Header className="text-center">SIT CRAFT Camp</Header>
          <Subtitle>
            <span>14-21 October 2017</span>
            <span className="small">School of Information Technology,</span>
            <span className="small">King Mongkut's University of Technology Thonburi.</span>
          </Subtitle>
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
