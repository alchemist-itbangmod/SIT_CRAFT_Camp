import React from 'react'
import Router from 'next/router'
import firebase from 'firebase'
import clientCredentials from '../../credentials/client'

export default class StepOne extends React.Component {
  componentDidMount () {
    firebase.initializeApp(clientCredentials)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Router.push(`/register?currentStep=${2}`)
        return user.getToken()
          .then((token) => {})
          .then((res) => {})
      }
    })
  }

  handleLogin () {
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
  }

  render() {
    return (
      <div className="text-center">
        <h1>{`Welcome to SIT CRAFT Camp`}</h1>
        <p>{`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore sequi porro soluta, quod nisi? Deserunt deleniti illo rerum necessitatibus, porro facilis, molestias aliquam corporis magnam harum, cupiditate ratione est.`}</p>
        <div className="signup">
          <p><b>{`Sign up with your GitHub credentials to get started.`}</b></p>
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
