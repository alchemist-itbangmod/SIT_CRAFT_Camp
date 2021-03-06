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
            ข้อมูลในการติดต่อน้องๆ โดยทางคณะจะไม่เปิดเผยข้อมูลในส่วนนี้กับผู้อื่น
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <Textarea
              field={`address`}
              label={`ที่อยู่`}
              handleChange={props.setField}
              value={data.address}
            />
          </div>
          <div className="col-6 col-md-4">
            <Input
              type={'text'}
              field={`district`}
              label={`เขต/อำเภอ`}
              handleChange={props.setField}
              value={data.district}
            />
          </div>
          <div className="col-6 col-md-4">
            <Select
              type={'text'}
              field={`province`}
              label={`จังหวัด`}
              handleChange={props.setField}
              value={data.province}
              dropdown={dropdown.province}
            />
          </div>
          <div className="col-6 col-md-4">
            <Input
              type={'number'}
              field={`zipcode`}
              label={`รหัสไปรษณีย์`}
              placeholder={`10140`}
              handleChange={props.setField}
              value={data.zipcode}
            />
          </div>
          <div className="col-12 col-md-5">
            <Input
              type={'text'}
              field={`facebook`}
              label={`facebook URL`}
              placeholder={`https://www.facebook.com/SIT.Family/`}
              handleChange={props.setField}
              value={data.facebook}
            />
          </div>
          <div className="col-12 col-md-5">
            <Input
              type={'tel'}
              field={`telno`}
              label={`เบอร์โทรศัพท์`}
              placeholder={`051-234-5678`}
              handleChange={props.setField}
              pattern={`[0-9]{10}`}
              title={`กรุณากรอกตัวเลข 0-9 ให้ครบ 10 หลัก`}
              value={data.telno}
            />
          </div>
        </div>
      </div>
    )
  }
}
