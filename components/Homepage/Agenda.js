import React from 'react'
import styled from 'styled-components'

import { Section } from '../Core/Layout'
import contents from './content.json'

const AgendaSection = styled(Section)`
  background: #fafafa;
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

const Clan = styled.div`
  width: 100%;
  margin-bottom: 20px;
  min-height: 250px;

  .card-body {
    padding: 1rem;
  }

  h3 {
    font-size: 22px;
  }

  p {
    font-size: 18px;
    margin: 0;

    &.text-muted {
      font-size: 16px;
    }
  }
`

const Agenda = props => (
  <AgendaSection>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="text-center">
            <small />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="/static/images/logo-sit-craft-camp.svg" className="img-fluid" alt="Logo" />
        </div>
        <div className="col-12 col-md-6">
          <Header className="text-center">Agenda.</Header>
          <div className="row">
            <div className="col-md-11 ml-md-auto">
              <ul>
                <li>
                  <p>4 - 10 Oct Register</p>
                </li>
                <li>
                  <p>11 Oct Announcement</p>
                </li>
                <li>
                  <p>14 - 15 Oct Workshop</p>
                </li>
                <li>
                  <p>16 - 20 Oct Craft your system</p>
                </li>
                <li>
                  <p>21 Oct Rocket Launch</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AgendaSection>
)

export default Agenda
