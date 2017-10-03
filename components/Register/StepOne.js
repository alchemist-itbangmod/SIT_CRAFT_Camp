import React from 'react'

export default class StepOne extends React.Component {
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
