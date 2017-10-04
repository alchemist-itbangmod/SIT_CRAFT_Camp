import React from 'react'
import Router from 'next/router'
import firebase from 'firebase'
import clientCredentials from '../../credentials/client'

import styled from 'styled-components'

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

const Button = styled.button`
  color: #333;
  background-color: white;
  border-color: white;
  font-weight: bold;
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

export default class StepOne extends React.Component {
  async componentDidMount () {
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials)
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Router.push(`/register?currentStep=${2}`)
      }
    })
  }

  handleLogin = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
  }

  render() {
    return (
      <div className="text-center">
        <h1>{`Registration`}</h1>
        <Detail>"SIT CRAFT Camp" ค่ายที่จะทำให้น้อง ๆ ชั้นมัธยมศึกษาปีที่ 5 - 6 ได้เรียนรู้กระบวนการดี ๆ ในการพัฒนาซอฟแวร์ <br />"SIT CRAFT Camp"  เป็นค่ายในรูปแบบ ไป - กลับ (ไม่ค้างคืน) <u>เปิดรับสมัครตั้งแต่วันนี้ - 10 ตุลาคม 2560</u></Detail>
        <Detail className="small"><u><b>{`หมายเหตุ`}</b></u> สมัครฟรี ไม่มีค่าใช้จ่าย ยกเว้น หากน้อง ๆ คนไหน ไม่สะดวกในการเดินทางไป-กลับ ทางคณะฯ จะจัดหาพอพักของมหาวิทยาลัยให้ แต่ต้องเสียค่าใช้จ่ายเอง</Detail>

        <div className="signup">
          <Button
            className="btn btn-lg btn-secondary"
            onClick={this.handleLogin}
          >
            <i className="fa fa-github" />
            <span>{`Register with GitHub`}</span>
          </Button>
        </div>
      </div>
    )
  }
}
