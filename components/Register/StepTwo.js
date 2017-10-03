import React from 'react'

export default class StepTwo extends React.Component {
  render() {
    return (
      <div>
        <h1>Fill your detail.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore sequi porro soluta, quod nisi? Deserunt deleniti illo rerum necessitatibus, porro facilis, molestias aliquam corporis magnam harum, cupiditate ratione est.</p>
        <div className="row">
          <div className="col-3">
            <button className="btn btn-block btn-lg btn-secondary">
              DEVELOPER
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-block btn-lg btn-secondary">
              UX/UI DESIGN
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-block btn-lg btn-secondary">
              INFRASTRUCTURE
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-block btn-lg btn-secondary">
              GAME
            </button>
          </div>
        </div>
        <hr />

      </div>
    )
  }
}
