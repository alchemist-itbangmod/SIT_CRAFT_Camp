import React from 'react'
import Router from 'next/router'
import firebase from 'firebase'
import clientCredentials from '../../credentials/client'

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
        <h1>{`Welcome to SIT CRAFT Camp`}</h1>
        <p>{`"SIT CRAFT Camp"  ค่ายฟรี ๆ ที่จะทำให้น้อง ๆ ชั้นมัธยมศึกษาปีที่ 5 - 6 ได้เรียนรู้กระบวนการดี ๆ ในการพัฒนาซอฟแวร์ "SIT CRAFT Camp"  เป็นค่ายในรูปแบบ ไป - กลับ (ไม่ค้างคืน) เปิดรับสมัครตั้งแต่วันนี้ - 10 ตุลาคม 2560`}</p>
        <p><u><b>{`หมายเหตุ`}</b></u> {`สมัครฟรี ไม่มีค่าใช้จ่าย ยกเว้น หากน้อง ๆ คนไหน ไม่สะดวกในการเดินทางไป-กลับ ทางคณะฯ จะจัดหาพอพักของมหาวิทยาลัยให้ แต่ต้องเสียค่าใช้จ่ายเอง`}</p>
        
        <div className="signup">
          <button
            className="btn btn-lg btn-secondary"
            onClick={this.handleLogin}
          >
            {`Register with Github`}
          </button>
        </div>
      </div>
    )
  }
}
