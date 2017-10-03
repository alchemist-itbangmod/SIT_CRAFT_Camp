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
    )
  }
}
