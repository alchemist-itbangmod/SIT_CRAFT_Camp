import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

import firebase from 'firebase'
import clientCredentials from '../../credentials/client'
import { haveRegistration } from '../../utils/firebase'

import { actions as registerActions } from '../../ducks/register'

import Information from './Information'
import Contact from './Contact'
import Interesting from './Interesting'
import Questions from './Questions'

const Container = styled.div`
  label, p {
    font-weight: 300;
    letter-spacing: .024681em;
  }
`

const Fieldset = styled.fieldset`
  transition: all .5s;

  ${props => props.disabled && css`
    opacity: 0.6;
  `}
`
@connect(
  state => ({
    registerData: state.register
  }),
  { setField: registerActions.setField }
)
export default class StepTwo extends React.Component {
  async componentDidMount () {
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials)
    }
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        let registration = await haveRegistration(firebase, user)
        if (registration !== null) {
          Router.push(`/register?currentStep=${3}`)
        }

        const data = user.providerData[0]
        this.props.setField('email', data.email)
        this.props.setField('name', data.displayName)
      } else {
        Router.push(`/register?currentStep=${1}`)
      }
    })
  }

  handleLogout = async () => {
    firebase.auth().signOut()
    Router.push(`/register?currentStep=${1}`)
  }

  render() {
    const { props } = this
    const data = props.registerData

    return (
      <Container>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Define your Team</h2>
            <p className="text-center">
              <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore sequi porro soluta.</small>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'developer' && 'active'}`}
              onClick={e => props.setField('team', 'developer')}
            >
              DEVELOPER
            </button>
          </div>
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'design' && 'active'}`}
              onClick={e => props.setField('team', 'design')}
            >
              UX/UI DESIGN
            </button>
          </div>
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'infrastructure' && 'active'}`}
              onClick={e => props.setField('team', 'infrastructure')}
            >
              INFRASTRUCTURE
            </button>
          </div>
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'game' && 'active'}`}
              onClick={e => props.setField('team', 'game')}
            >
              GAME
            </button>
          </div>
        </div>
        <hr />
        <form>
          <Fieldset>
            <Information />
            <hr />
            <Contact />
            <hr />
            <Interesting />
            <hr />
            <Questions />
            <div className="text-center">
              <button className="btn btn-primary btn-lg w-50">
                Submit
              </button>
              <small className="form-text text-muted">
                หากต้องการออกจากระบบกรุณากดปุ่ม <a href="#" onClick={this.handleLogout}>ออกจากระบบ</a> นี้
              </small>
            </div>
          </Fieldset>
        </form>
      </Container>
    )
  }
}
