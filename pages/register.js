import React from 'react'
import RegisterPage from '../components/Register/Main'

import withRedux from '../ducks/index'

@withRedux()
export default class Register extends React.Component {
  render() {
    return (
      <RegisterPage {...this.props} />
    )
  }
}
