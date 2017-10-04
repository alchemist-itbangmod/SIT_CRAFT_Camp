import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'

import firebase from 'firebase'
import clientCredentials from '../../credentials/client'
import { haveRegistration } from '../../utils/firebase'

const Button = styled.button`
  color: #333;
  background-color: white;
  border-color: white;
  letter-spacing: .3px;
  cursor: pointer;

  i {
    font-size: 28px;
    margin: 5px;
    margin-right: 7px;
    vertical-align: top;
  }

  span {
    padding-top: 7px;
    display: inline-block;
  }
`

const Detail = styled.p`
  display: block;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  margin-bottom: 12px;

  &.small {
    font-size: 16px;
  }

  @media(max-width: 768px) {
    font-size: 18px;
    width: 100%;
  }

  a {
    color: white;
    text-decoration: underline;
  }
`

const Team = styled.h2`
  color: #ccc;
  letter-spacing: 0.04em;
  margin: 20px 0;
`

export default class StepThree extends React.Component {
  state = {
    registration: null
  }

  async componentDidMount () {
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials)
    }
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        let registration = await haveRegistration(firebase, user)
        if (registration === null) {
          Router.push(`/register?currentStep=${2}`)
        }
        this.setState({ registration })
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
    if (this.state.registration === null) return <div />
    const data = this.state.registration
    let index = 4
    switch (data.team) {
      case 'developer':
        index = 0
        break
      case 'design':
        index = 1
        break
      case 'infrastructure':
        index = 2
        break
      case 'game':
        index = 3
        break
      default:
        index = 4
    }

    return (
      <div className="text-center">
        <h1>Registration is Done!</h1>
        <Team clan={index}>{this.state.registration.team} TEAM</Team>
        <Detail>{`การสมัครของน้อง${this.state.registration.name} ${this.state.registration.surname} เสร็จสิ้นเรียบร้อยแล้วครับ น้องสามารถรอประกาศผลได้ที่ `}<a href="https://www.facebook.com/SIT.Family">SIT Fanpage</a>{` ในวันที่ 11 ตุลาคม 2560 พี่ๆ หวังว่าจะได้พบน้องที่ SIT CRAFT Camp นะครับ`}</Detail>
        <div className="share">
          <p><b>หากน้องต้องการออกจากระบบ กดปุ่มด้านล่างได้เลยครับ</b></p>
          <Button
            className="btn btn-lg btn-secondary"
            onClick={this.handleLogout}
          >
            <i className="fa fa-sign-out" />
            <span>{`ออกจากระบบ`}</span>
          </Button>
        </div>
      </div>
    )
  }
}
