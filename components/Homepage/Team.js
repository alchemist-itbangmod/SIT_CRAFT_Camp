import React from 'react'
import styled from 'styled-components'

import { Section } from '../Core/Layout'
import contents from './content.json'

const TeamSection = styled(Section)`
  background: #fafafa;
`

const Header = styled.h2`
  font-size: 3.2em;
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

const Team = props => (
  <TeamSection>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header className="text-center">Clan.</Header>
          <p className="text-center">
            <small></small>
          </p>
        </div>
      </div>
      <div className="row">
        {
          contents.clans.map(clan => (
            <div className="col-12 col-md-3">
              <Clan className="card text-center">
                <div className="card-body">
                  <h3 className="card-title">{ clan.name }</h3>
                  <p className="card-text">{ clan.description }</p>
                  <p className="mt-2 text-muted">{ clan.requirement }</p>
                </div>
              </Clan>
            </div>
          ))
        }
      </div>
      <div className="row">
        <div className="col-12">
          <Header className="text-center small">
            <small>Craftsman</small>
              <br />
              Requirement.
          </Header>
          <p className="text-center">
            ชั้นมัธยมศึกษาปีที่ 5 - 6
          </p>
          <p className="text-center">
            สายการเรียน วิทย์-คณิต/วิทย์-คอม/ศิลป์-คำนวณ
          </p>
          <p className="text-center">
            เกรดเฉลี่ยรวม ไม่ตำ่กว่า 2.50
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <p className="text-center">
            <small>ถ้าพร้อมที่จะร่วมเป็นส่วนหนึ่งกับเรา สมัครเลย!</small>
          </p>
          <button className="btn btn-lg btn-secondary">
            สมัครเข้าร่วม
          </button>
        </div>
      </div>
    </div>
  </TeamSection>
)

export default Team
