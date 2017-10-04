import React from 'react'
import Router from 'next/router'

import firebase from 'firebase'
import clientCredentials from '../../credentials/client'
import { haveRegistration } from '../../utils/firebase'

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

  render() {
    return (
      <div className="text-center">
        <h1>Waiting for Recall</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore sequi porro soluta, quod nisi? Deserunt deleniti illo rerum necessitatibus, porro facilis, molestias aliquam corporis magnam harum, cupiditate ratione est.</p>
        <div className="signup">
          <p><b>บอกเพื่อนๆ ให้มาสมัคร SIT CRAFT Camp ด้วยกันสิ</b></p>
          <button className="btn btn-lg btn-secondary">
            Share on Facebook
          </button>
          <button className="btn btn-lg btn-secondary w-20 ml-2">
            Share on Twitter
          </button>
          <p><small></small></p>
        </div>
      </div>
    )
  }
}
