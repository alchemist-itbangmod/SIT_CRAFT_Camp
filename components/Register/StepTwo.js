import React from 'react'
import styled from 'styled-components'

import Input from '../Core/Input'

const Container = styled.div`

  label, p {
    font-weight: 300;
    letter-spacing: .024681em;
  }
`

export default class StepTwo extends React.Component {
  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-12">
            <div className="header">
              <h1 className="text-center">Fill your detail.</h1>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore sequi porro soluta, quod nisi? Deserunt deleniti illo rerum necessitatibus, porro facilis, molestias aliquam corporis magnam harum, cupiditate ratione est.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button className="btn btn-block btn-lg btn-secondary">
              DEVELOPER
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-block btn-lg btn-secondary">
              UX/UI DESIGN
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-block btn-lg btn-secondary">
              INFRASTRUCTURE
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-block btn-lg btn-secondary">
              GAME
            </button>
          </div>
        </div>
        <hr />
        <form>
          <fieldset>
            <div className="row">
              <div className="col-12">
                <Input
                  type={'email'}
                  field={`email`}
                  label={`Email Address`}
                  placeholder={`Enter email`}
                  footer={`We'll never share your email with anyone else.`}
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
                    <label className="btn btn-secondary w-50 active">
                      <input type="radio" name="male" id="male" autoComplete="off" checked /> ชาย
                    </label>
                    <label className="btn btn-secondary w-50">
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
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="InputEmail">ที่อยู่:</label>
                  <textarea type="text" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
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
          </fieldset>
        </form>
      </Container>
    )
  }
}
