import React from 'react'
import { connect } from 'react-redux'

import { actions as registerActions } from '../../ducks/register'
import { Textarea } from '../Core/Input'
import questions from './data-questions.json'

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
    let index = 4
    switch (data.team) {
      case 'developer':
        index = 0
        break
      case 'design':
        index = 1
        break
      case 'infrastructure':
        index = 2
        break
      case 'game':
        index = 3
        break
      default:
        index = 4
    }
    return (
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">Team Questions.</h3>
          <p className="text-center">
            คำถามในการวัดความเหมาะสมในการคัดเลือกให้เข้าร่วมทีม
          </p>
        </div>
        <div className="col-12">
          <Textarea
            field={`question`}
            label={questions.team[index]}
            handleChange={props.setField}
            value={data.question}
          />
        </div>
      </div>
    )
  }
}
