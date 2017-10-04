import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import colors from '../Core/colors'
import { darken } from 'polished'

import { Section } from '../Core/Layout'
import contents from './content.json'

const TeamSection = styled(Section)`
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
  border: 1px solid ${props => colors.team[props.clan]};

  .card-body {
    padding: 1rem;
  }

  h3 {
    font-size: 48px;
    color: ${props => darken(0.15, colors.team[props.clan])};
  }

  p {
    font-size: 20px;
    color: #333;
    margin: 0;

    &.requirement {
      font-size: 18px;
      color: ${props => darken(0.15, colors.team[props.clan])};
    }
  }
`

const Team = props => (
  <TeamSection>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header className="text-center">Clan.</Header>
          <p className="text-center">
            <small />
          </p>
        </div>
      </div>
      <div className="row">
        {
          contents.clans.map((clan, key) => (
            <div key={clan.name} className="col-12 col-md-6">
              <Clan className="card text-center" clan={key}>
                <div className="card-body">
                  <h3 className="card-title">{ clan.name }</h3>
                  <p className="card-text">{ clan.description }</p>
                  <p className="mt-2 requirement">``{ clan.requirement }``</p>
                </div>
              </Clan>
            </div>
          ))
        }
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <p className="text-center">
            <small>ถ้าพร้อมที่จะร่วมเป็นส่วนหนึ่งกับเรา สมัครเลย!</small>
          </p>
          <button
            className="btn btn-lg btn-secondary"
            onClick={() => Router.push('/register')}
          >
            สมัครเข้าร่วม
          </button>
        </div>
      </div>
    </div>
  </TeamSection>
)

export default Team
