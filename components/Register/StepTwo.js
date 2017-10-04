import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

import firebase from 'firebase'
import clientCredentials from '../../credentials/client'
import { haveRegistration, saveRegistration } from '../../utils/firebase'

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

const Button = styled.button`
  cursor: pointer;
`

@connect(
  state => ({
    registerData: state.register
  }),
  { setField: registerActions.setField }
)
export default class StepTwo extends React.Component {
  state = {
    user: null
  }
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
        this.setState({ user })
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

  handleRegister = async e => {
    e.preventDefault()
    await saveRegistration(firebase, this.state.user, this.props.registerData)
    Router.push(`/register?currentStep=${3}`)
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
              เลือกทีมที่ต้องการสมัคร โดยน้องๆ สามารถเลือกสมัครได้<u>เพียงแค่ 1 ทีม</u>เท่านั้น
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-2">
            <Button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'developer' && 'active'}`}
              onClick={e => props.setField('team', 'developer')}
            >
              {`DEVELOPER`}
            </Button>
          </div>
          <div className="col-md-3 mb-2">
            <Button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'design' && 'active'}`}
              onClick={e => props.setField('team', 'design')}
            >
              {`UX/UI DESIGN`}
            </Button>
          </div>
          <div className="col-md-3 mb-2">
            <Button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'infrastructure' && 'active'}`}
              onClick={e => props.setField('team', 'infrastructure')}
            >
              {`INFRASTRUCTURE`}
            </Button>
          </div>
          <div className="col-md-3 mb-2">
            <Button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'game' && 'active'}`}
              onClick={e => props.setField('team', 'game')}
            >
              {`GAME`}
            </Button>
          </div>
        </div>
        <hr />
        <form onSubmit={this.handleRegister}>
          <Fieldset disabled={data.team === ''}>
            <Information />
            <hr />
            <Contact />
            <hr />
            <Interesting />
            <hr />
            <Questions />
            <div className="text-center">
              <p className="form-text">
                <small>ข้าพเจ้ายอมรับว่าข้อมูลทั้งหมดที่กรอกเป็นความจริงทุกประการ</small>
              </p>
              <Button className="btn btn-primary btn-lg w-50">
                ลงทะเบียน
              </Button>
            </div>
            <div className="text-center">
              <p className="form-text mt-4">
                หากน้องต้องการที่จะ <a href="#" onClick={this.handleLogout}>ออกจากระบบ</a> กดปุ่มนี้
              </p>
            </div>
          </Fieldset>
        </form>
      </Container>
    )
  }
}
