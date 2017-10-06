import React from 'react'
import styled from 'styled-components'

import { Section } from '../Core/Layout'

const AgendaSection = styled(Section)`
  background: #fafafa;
`

const AgendaLeft = styled.div.attrs({
  className: 'col-12 col-md-6'
})`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AgendaContent = styled.div`
  font-size: 24px;
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
        <AgendaLeft>
          <div>
            <Header className="text-center">Agenda.</Header>
            <p>
              <small />
            </p>
            <AgendaContent>
              {
                data.map(e => (
                  <div className="row" key={e[0]}>
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
        </AgendaLeft>
        <div className="col-12 col-md-6">
          <img src="/static/images/agenda.png" className="img-fluid" alt="Logo" />
        </div>
      </div>
    </div>
  </AgendaSection>
)

export default Agenda
