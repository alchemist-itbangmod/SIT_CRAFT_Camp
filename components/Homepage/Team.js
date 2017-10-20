import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import colors from '../Core/colors'
import { darken, opacify } from 'polished'

import { Section } from '../Core/Layout'
import contents from './content.json'

const TeamSection = styled(Section)`
  background: #fafafa;

  .promo {
    font-size: 24px;
    padding-top: 16px;

    @media(max-width: 768px) {
      font-size: 20px;
    }
  }
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
  transition: all .4s;

  .card-body {
    padding: 1rem;
  }

  h3 {
    font-size: 22px;
    color: ${props => darken(0.15, colors.team[props.clan])};

    @media(max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 20px;
    color: #333;
    margin: 0;
    min-height: 130px;

    &.requirement {
      font-size: 18px;
      min-height: 0;
      color: ${props => darken(0.15, colors.team[props.clan])};
    }

    @media(max-width: 768px) {
      min-height: 100px;
    }
  }
`

const Button = styled.button`
  color: #333;
  background-color: white;
  border-color: #ccc;
  letter-spacing: .3px;
  cursor: pointer;
  padding: 10px 38px;

  span {
    display: inline-block;
    font-size: 32px;
    padding-top: 7px;
  }
`

const LogoTeam = styled.div`
  padding: 20px;
  min-height: 200px;

  img {
    margin: 0 auto;
    display: block;
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
            <div key={clan.name} className="col-12 col-md-3">
              <Clan className="card text-center" clan={key}>
                <div className="card-body">
                  <h3 className="card-title">{ clan.name }</h3>
                  <LogoTeam>
                    <img src={`/static/images/team/${key}.png`} className="img-fluid" alt="" />
                  </LogoTeam>
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
          <p className="promo text-center">
            ยินดีต้อนรับน้องๆ ทุกคนเข้าสู่
          </p>
          <Button
            className="btn btn-lg btn-primary"
            onClick={() => Router.push('/register')}
          >
            <span>ประกาศผลการคัดเลือก</span>
          </Button>
        </div>
      </div>
    </div>
  </TeamSection>
)

export default Team
