import React from 'react'
import { connect } from 'react-redux'

import { actions as registerActions } from '../../ducks/register'
import { Input, Textarea, Select } from '../Core/Input'
import dropdown from './data-dropdown.json'

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
            <small>ข้อมูลในการติดต่อน้องๆ โดยทางคณะจะไม่เปิดเผยข้อมูลในส่วนนี้กับผู้อื่น </small>
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <Textarea
              field={`address`}
              label={`ที่อยู่`}
              placeholder={`---`}
              handleChange={props.setField}
              value={data.address}
            />
          </div>
          <div className="col-4">
            <Input
              type={'text'}
              field={`district`}
              label={`เขต/อำเภอ`}
              placeholder={`---`}
              handleChange={props.setField}
              value={data.district}
            />
          </div>
          <div className="col-4">
            <Select
              type={'text'}
              field={`province`}
              label={`จังหวัด`}
              handleChange={props.setField}
              value={data.province}
              dropdown={dropdown.province}
            />
          </div>
          <div className="col-4">
            <Input
              type={'number'}
              field={`zipcode`}
              label={`รหัสไปรษณีย์`}
              placeholder={`---`}
              handleChange={props.setField}
              value={data.zipcode}
            />
          </div>
          <div className="col-6">
            <Input
              type={'text'}
              field={`telno`}
              label={`เบอร์โทรศัพท์`}
              placeholder={`---`}
              handleChange={props.setField}
              value={data.telno}
            />
          </div>
        </div>
      </div>
    )
  }
}
