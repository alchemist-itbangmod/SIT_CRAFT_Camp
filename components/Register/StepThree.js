import React from 'react'
import Router from 'next/router'

import firebase from 'firebase'
import clientCredentials from '../../credentials/client'
import { haveRegistration } from '../../utils/firebase'

export default class StepThree extends React.Component {
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
      } else {
        Router.push(`/register?currentStep=${1}`)
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to SIT CRAFT Camp</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore sequi porro soluta, quod nisi? Deserunt deleniti illo rerum necessitatibus, porro facilis, molestias aliquam corporis magnam harum, cupiditate ratione est.</p>
        <div className="signup">
          <p><b>Sign up with your GitHub credentials to get started.</b></p>
          <button className="btn btn-lg btn-secondary">
            Register with Github
          </button>
        </div>
      </div>
    )
  }
}
