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
export default class Contact extends React.Component {
  render() {
    const { props } = this
    const data = props.registerData

    return (
      <div>
        <div className="col-12">
          <h3 className="text-center">Contact</h3>
          <p className="text-center">
            <small>Lorem ipsum dolor sit amet, consectetur.</small>
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <Textarea
              field={`address`}
              label={`ที่อยู่`}
              placeholder={`---`}
            />
          </div>
          <div className="col-4">
            <Input
              type={'text'}
              field={`distinct`}
              label={`เขต/อำเภอ`}
              placeholder={`---`}
            />
          </div>
          <div className="col-4">
            <Input
              type={'text'}
              field={`province`}
              label={`จังหวัด`}
              placeholder={`---`}
            />
          </div>
          <div className="col-4">
            <Input
              type={'text'}
              field={`zipcode`}
              label={`จังหวัด`}
              placeholder={`---`}
            />
          </div>
          <div className="col-6">
            <Input
              type={'text'}
              field={`tel`}
              label={`เบอร์โทรศัพท์`}
              placeholder={`---`}
            />
          </div>
        </div>
      </div>
    )
  }
}
