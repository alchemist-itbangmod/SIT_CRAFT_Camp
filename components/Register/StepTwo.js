import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import instance from '../../libs/axios'

import { actions as registerActions } from '../../ducks/register'

import Information from './Information'
import Contact from './Contact'
import Interesting from './Interesting'
import Questions from './Questions'

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
    registerData: state.register
  }),
  { setField: registerActions.setField }
)
export default class StepTwo extends React.Component {
  onSubmit = async (e) => {
    e.preventDefault()
    let { props } = this
    let data = props.registerData
    console.log(data)
    await instance.post(`/candidates`, { data: data })
      .then(resp => {
        console.log(resp)
        // return resp
      })
  }

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
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'developer' && 'active'}`}
              onClick={e => props.setField('team', 'developer')}
            >
              DEVELOPER
            </button>
          </div>
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'design' && 'active'}`}
              onClick={e => props.setField('team', 'design')}
            >
              UX/UI DESIGN
            </button>
          </div>
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'infrastructure' && 'active'}`}
              onClick={e => props.setField('team', 'infrastructure')}
            >
              INFRASTRUCTURE
            </button>
          </div>
          <div className="col-3">
            <button
              className={`btn btn-block btn-lg btn-outline-light ${data.team === 'game' && 'active'}`}
              onClick={e => props.setField('team', 'game')}
            >
              GAME
            </button>
          </div>
        </div>
        <hr />
        <form onSubmit={e => this.onSubmit(e)}>
          <Fieldset>
            <Information />
            <hr />
            <Contact />
            <hr />
            <Interesting />
            <hr />
            <Questions />
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
