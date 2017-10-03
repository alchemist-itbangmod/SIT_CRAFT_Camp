import React from 'react'
import { connect } from 'react-redux'

import { actions as registerActions } from '../../ducks/register'
import { Input } from '../Core/Input'

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
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore sequi porro soluta.</small>
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <Input
              type={'email'}
              field={`email`}
              label={`Email Address`}
              placeholder={`Enter email`}
              footer={`We'll never share your email with anyone else.`}
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
              label={`Name`}
              placeholder={`Enter your name`}
              handleChange={props.setField}
              value={data.name}
            />
          </div>
          <div className="col-6">
            <Input
              type={'text'}
              field={`surname`}
              label={`Surname`}
              placeholder={`Enter your surname`}
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
              label={`Nickname`}
              placeholder={`Enter your nickname`}
              handleChange={props.setField}
              value={data.nickname}
            />
          </div>
          <div className="col-6">
            <Input
              type={'text'}
              field={`citizenID`}
              label={`Citizen ID`}
              placeholder={`Enter your Citizen ID`}
              handleChange={props.setField}
              value={data.citizenID}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
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
          <div className="col-4">
            <Input
              type={'text'}
              field={`religion`}
              label={`ศาสนา`}
              placeholder={`---`}
              handleChange={props.setField}
              value={data.religion}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Input
              type={'text'}
              field={`school`}
              label={`โรงเรียน/สถานศึกษา`}
              placeholder={`---`}
              handleChange={props.setField}
              value={data.school}
            />
          </div>
          <div className="col-3">
            <Input
              type={'text'}
              field={`grade`}
              label={`ระดับชั้น`}
              placeholder={`---`}
              handleChange={props.setField}
              value={data.grade}
            />
          </div>
          <div className="col-3">
            <Input
              type={'text'}
              field={`GPAX`}
              label={`GPAX`}
              placeholder={`---`}
              handleChange={props.setField}
              value={data.GPAX}
            />
          </div>
        </div>
      </div>
    )
  }
}
