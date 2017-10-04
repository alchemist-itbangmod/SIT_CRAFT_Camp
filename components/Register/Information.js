import React from 'react'
import { connect } from 'react-redux'

import { actions as registerActions } from '../../ducks/register'
import dropdown from './data-dropdown.json'
import { Input, Select } from '../Core/Input'

@connect(
  state => ({
    registerData: state.register
  }),
  { setField: registerActions.setField }
)
export default class Information extends React.Component {
  render() {
    const { props } = this
    const data = props.registerData

    return (
      <div>
        <div className="col-12">
          <h2 className="text-center">Fill your Information</h2>
          <p className="text-center">
            ข้อมูลส่วนตัวของน้องๆ โดยทางคณะจะไม่เปิดเผยข้อมูลส่วนตัวของน้องๆ ให้กับผู้อื่น
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <Input
              type={'email'}
              field={`email`}
              label={`Email Address`}
              placeholder={`Enter email`}
              footer={`** ใช้อีเมลที่ผูกกับ GitHub Account เพื่อทำกิจกรรมภายในค่าย`}
              handleChange={props.setField}
              value={data.email}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Input
              type={'text'}
              field={`name`}
              label={`ชื่อจริง`}
              handleChange={props.setField}
              value={data.name}
            />
          </div>
          <div className="col-6">
            <Input
              type={'text'}
              field={`surname`}
              label={`นามสกุล`}
              handleChange={props.setField}
              value={data.surname}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Input
              type={'text'}
              field={`nickname`}
              label={`ชื่อเล่น`}
              handleChange={props.setField}
              value={data.nickname}
            />
          </div>
          <div className="col-6">
            <Input
              type={'number'}
              field={`citizenID`}
              label={`รหัสประจำตัวประชาชน`}
              placeholder={`1234567890123`}
              handleChange={props.setField}
              value={data.citizenID}
            />
          </div>
          <div className="col-3">
            <Select
              type={'text'}
              field={`religion`}
              label={`ศาสนา`}
              handleChange={props.setField}
              value={data.religion}
              dropdown={dropdown.religion}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="InputEmail">เพศ:</label>
              <div className="btn-group d-block" data-toggle="buttons">
                <label className={`btn btn-outline-light w-50 ${data.gender === 'M' && 'active'}`}>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    autoComplete="off"
                    onChange={e => props.setField('gender', 'M')}
                    checked={data.gender === 'M'}
                    required
                  /> ชาย
                </label>
                <label className={`btn btn-outline-light w-50 ${data.gender === 'W' && 'active'}`}>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    autoComplete="off"
                    onChange={e => props.setField('gender', 'W')}
                    checked={data.gender === 'W'}
                  /> หญิง
                </label>
              </div>
            </div>
          </div>
          <div className="col-2">
            <Select
              type={'text'}
              field={`blood`}
              label={`กรุ๊ปเลือด`}
              placeholder={`---`}
              handleChange={props.setField}
              value={data.blood}
              dropdown={dropdown.blood}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Input
              type={'text'}
              field={`school`}
              label={`โรงเรียน/สถานศึกษา`}
              handleChange={props.setField}
              value={data.school}
            />
          </div>
          <div className="col-3">
            <Select
              type={'text'}
              field={`grade`}
              label={`ระดับชั้น`}
              handleChange={props.setField}
              value={data.grade}
              dropdown={dropdown.academicYear}
            />
          </div>
          <div className="col-3">
            <Input
              type={'number'}
              field={`GPAX`}
              label={`GPAX`}
              placeholder={`2.92`}
              handleChange={props.setField}
              value={data.GPAX}
            />
          </div>
        </div>
      </div>
    )
  }
}
