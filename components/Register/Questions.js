import React from 'react'
import { connect } from 'react-redux'

import { actions as registerActions } from '../../ducks/register'
import { Input, Textarea } from '../Core/Input'

@connect(
  state => ({
    registerData: state.register
  }),
  { setField: registerActions.setField }
)
export default class Interesting extends React.Component {
  render() {
    const { props } = this
    const data = props.registerData

    return (
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">Team Questions.</h3>
          <p className="text-center">
            <small>คำถามในการวัดความเหมาะสมในการคัดเลือกให้เข้าร่วมทีม</small>
          </p>
        </div>
        <div className="col-12">
          <Textarea
            field={`activities`}
            label={`คำถามสาขา`}
            placeholder={`---`}
          />
        </div>
      </div>
    )
  }
}
