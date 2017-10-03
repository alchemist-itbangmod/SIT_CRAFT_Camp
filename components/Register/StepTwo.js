import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

import { actions as registerActions } from '../../ducks/register'

import { Input, Textarea } from '../Core/Input'

const Container = styled.div`
  label, p {
    font-weight: 300;
    letter-spacing: .024681em;
  }
`

const Fieldset = styled.fieldset`
  transition: all .5s;

  ${props => props.disabled && css`
    opacity: 0.6;
  `}
`
@connect(
  state => ({
    registerData: state.register,
  }),
  { setField: registerActions.setField }
)
export default class StepTwo extends React.Component {
  render() {
    const { props } = this
    const data = props.registerData

    return (
      <Container>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Define your Team</h2>
            <p className="text-center">
              <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore sequi porro soluta.</small>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${props.team === 'developer' && 'active'}`}
              onClick={e => props.setField('team', 'developer')}
            >
              DEVELOPER
            </button>
          </div>
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${props.team === 'design' && 'active'}`}
              onClick={e => props.setField('team', 'design')}
            >
              UX/UI DESIGN
            </button>
          </div>
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${props.team === 'infrastructure' && 'active'}`}
              onClick={e => props.setField('team', 'infrastructure')}
            >
              INFRASTRUCTURE
            </button>
          </div>
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${props.team === 'game' && 'active'}`}
              onClick={e => props.setField('team', 'game')}
            >
              GAME
            </button>
          </div>
        </div>
        <hr />
        <form>
          <Fieldset>
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
                />
              </div>
              <div className="col-6">
                <Input
                  type={'text'}
                  field={`surname`}
                  label={`Surname`}
                  placeholder={`Enter your surname`}
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
                />
              </div>
              <div className="col-6">
                <Input
                  type={'text'}
                  field={`citizenId`}
                  label={`Citizen ID`}
                  placeholder={`Enter your Citizen ID`}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="InputEmail">เพศ:</label>
                  <div className="btn-group d-block" data-toggle="buttons">
                    <label className="btn btn-outline-light w-50 active">
                      <input type="radio" name="male" id="male" autoComplete="off" checked /> ชาย
                    </label>
                    <label className="btn btn-outline-light w-50">
                      <input type="radio" name="famale" id="female" autoComplete="off" /> หญิง
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
                />
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <Input
                  type={'text'}
                  field={`school`}
                  label={`โรงเรียน/สถานศึกษา`}
                  placeholder={`---`}
                />
              </div>
              <div className="col-4">
                <Input
                  type={'text'}
                  field={`grade`}
                  label={`ระดับชั้น`}
                  placeholder={`---`}
                />
              </div>
            </div>
            <hr />
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
            <hr />
            <div className="row">
              <div className="col-12">
                <h3 className="text-center">Interesting.</h3>
                <p className="text-center">
                  <small>Lorem ipsum dolor sit amet, consectetur.</small>
                </p>
              </div>
              <div className="col-12">
                <Textarea
                  field={`activities`}
                  label={`กิจกรรมที่เคยเข้าร่วมหรือทำมาก่อน`}
                  placeholder={`---`}
                />
              </div>
              <div className="col-12">
                <Textarea
                  field={`activities`}
                  label={`ทักษะความสามารถพิเศษด้านคอมพิวเตอร์`}
                  placeholder={`---`}
                />
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="InputEmail">ไซต์เสื้อ:</label>
                  <select className="form-control">
                    <option>Default select</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="InputEmail">{`มีความต้องการจะพักในหอพักของมหาวิทยาลัย:`}</label>
                  <div className="btn-group d-block" data-toggle="buttons">
                    <label className="btn btn-outline-light w-50 active">
                      <input type="radio" name="male" id="male" autoComplete="off" checked /> ต้องการ
                    </label>
                    <label className="btn btn-outline-light w-50">
                      <input type="radio" name="famale" id="female" autoComplete="off" /> ไม่ต้องการ
                    </label>
                  </div>
                  <small className="form-text text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <h3 className="text-center">Team Questions.</h3>
                <p className="text-center">
                  <small>Lorem ipsum dolor sit amet, consectetur.</small>
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
            <div className="text-center">
              <small className="form-text text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
              <button className="btn btn-primary btn-lg w-50">
                Submit
              </button>
            </div>
          </Fieldset>
        </form>
      </Container>
    )
  }
}
