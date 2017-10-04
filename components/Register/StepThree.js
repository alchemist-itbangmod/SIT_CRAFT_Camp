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
`

const Logout = styled.p`
  a {
    color: #ccc;
  }

`

export default class StepThree extends React.Component {
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
        if (registration === null) {
          Router.push(`/register?currentStep=${2}`)
        }
        this.setState({ user })
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
    return (
      <div className="text-center">
        <h1>Registration is Done!</h1>
        <Detail>การสมัครของน้องเสร็จสิ้นเรียบร้อยแล้วครับ น้องสามารถรอประกาศผลได้ที่ facebook/SIT.family ในวันที่ 11 ตุลาคม 2560 พี่ๆ หวังว่าจะได้พบน้องนะครับที่ SIT CRAFT Camp : ) </Detail>
        <div className="share">
          <p><b>บอกเพื่อนๆ ให้มาสมัคร SIT CRAFT Camp ด้วยกันสิ</b></p>
          <Button
            className="btn btn-lg btn-secondary"
          >
            <i className="fa fa-facebook" />
            <span>{`Share on facebook`}</span>
          </Button>
          <Logout className="form-text">
            หากน้องต้องการออกจากระบบกรุณากดปุ่ม <a href="#" onClick={this.handleLogout}>ออกจากระบบ</a> นี้
          </Logout>
        </div>
      </div>
    )
  }
}
