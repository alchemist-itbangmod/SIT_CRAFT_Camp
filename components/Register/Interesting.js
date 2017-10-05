import React from 'react'
import { connect } from 'react-redux'

import { actions as registerActions } from '../../ducks/register'
import { Textarea, Select } from '../Core/Input'
import dropdown from './data-dropdown.json'

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
            ข้อมูลความสนใจ ของน้องๆ ข้อมูลส่วนนี้มีผลต่อการคัดเลือกน้อง
          </p>
        </div>
        <div className="col-12">
          <Textarea
            field={`activities`}
            label={`กิจกรรมที่เคยเข้าร่วมหรือทำมาก่อน`}
            footer={`** มีผลต่อการคัดเลือกน้องเพื่อเข้าสู่ค่าย`}
            handleChange={props.setField}
            value={data.activities}
          />
        </div>
        <div className="col-12">
          <Textarea
            field={`talent`}
            label={`ทักษะความสามารถพิเศษด้านคอมพิวเตอร์`}
            footer={`** มีผลต่อการคัดเลือกน้องเพื่อเข้าสู่ค่าย`}
            handleChange={props.setField}
            value={data.talent}
          />
        </div>
        <div className="col-12 col-md-4">
          <Select
            type={'text'}
            field={`shirtSize`}
            label={`ไซต์เสื้อ`}
            placeholder={`---`}
            handleChange={props.setField}
            value={data.shirtSize}
            dropdown={dropdown.shirtSize}
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="InputEmail">{`มีคอมพิวเตอร์ส่วนตัวที่สามารถนำมาค่ายได้:`}</label>
            <div className="btn-group d-block" data-toggle="buttons">
              <label className={`btn btn-outline-light w-50 ${data.haveLaptop === 'YES' && 'active'}`}>
                <input
                  type="radio"
                  name="dormitory"
                  id="need"
                  autoComplete="off"
                  onChange={e => props.setField('haveLaptop', 'YES')}
                  checked={data.haveLaptop === 'YES'}
                  required
                /> มี
              </label>
              <label className={`btn btn-outline-light w-50 ${data.haveLaptop === 'NO' && 'active'}`}>
                <input
                  type="radio"
                  name="dormitory"
                  id="no-need"
                  autoComplete="off"
                  onChange={e => props.setField('haveLaptop', 'NO')}
                  checked={data.haveLaptop === 'NO'}
                /> ไม่มี
              </label>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="InputEmail">{`มีความต้องการจะพักในหอพักของมหาวิทยาลัย:`}</label>
            <div className="btn-group d-block" data-toggle="buttons">
              <label className={`btn btn-outline-light w-50 ${data.needStayInUniversity === 'NEED' && 'active'}`}>
                <input
                  type="radio"
                  name="dormitory"
                  id="need"
                  autoComplete="off"
                  onChange={e => props.setField('needStayInUniversity', 'NEED')}
                  checked={data.needStayInUniversity === 'NEED'}
                  required
                /> ต้องการ
              </label>
              <label className={`btn btn-outline-light w-50 ${data.needStayInUniversity === 'NO' && 'active'}`}>
                <input
                  type="radio"
                  name="dormitory"
                  id="no-need"
                  autoComplete="off"
                  onChange={e => props.setField('needStayInUniversity', 'NO')}
                  checked={data.needStayInUniversity === 'NO'}
                /> ไม่ต้องการ
              </label>
            </div>
            <small className="form-text text-muted">กรณีที่น้องๆ ต้องการเข้าพักในหอพักทางคณะจะดำเนินการติดต่อหอพักให้ แต่น้องๆ ต้องออกค่าใช้จ่ายเอง</small>
          </div>
        </div>
      </div>
    )
  }
}
