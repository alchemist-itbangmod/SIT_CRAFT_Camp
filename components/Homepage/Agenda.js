import React from 'react'
import styled from 'styled-components'

import { Section } from '../Core/Layout'
import contents from './content.json'

const AgendaSection = styled(Section)`
  background: #fafafa;
`
const AgendaContent = styled.div`
  font-size: 1.2em;
`

const Header = styled.h2`
  font-size: 3.8em;
  margin: 20px;

  &.small {
    font-size: 2.2em;
    border-top: 1px dashed #ccc;
    padding: 20px;
  }
`

const data = [
  ['4 - 10 October', 'Register'],
  ['11 October', 'Announcement'],
  ['14 - 15 October', 'Workshop'],
  ['16 - 20 October', 'Craft your system'],
  ['21 October', 'Rocket Launch']
]

const Agenda = props => (
  <AgendaSection>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-md-11 ml-md-auto">
              <Header className="text-center">Agenda.</Header>
              <p>
                <small />
              </p>
              <AgendaContent>
                {
                  data.map(e => (
                    <div className="row">
                      <div className="col-6 text-right">
                        {e[0]}
                      </div>
                      <div className="col-6">
                        <b>{e[1]}</b>
                      </div>
                    </div>
                  ))
                }
              </AgendaContent>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src="/static/images/logo-sit-craft-camp.svg" className="img-fluid" alt="Logo" />
        </div>
      </div>
    </div>
  </AgendaSection>
)

export default Agenda
