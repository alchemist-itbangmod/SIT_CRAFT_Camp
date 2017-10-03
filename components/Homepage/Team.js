import React from 'react'
import styled from 'styled-components'

import { Section } from '../Core/Layout'

const Header = styled.h2`
  font-size: 3.2em;
`

const TeamSection = styled(Section)`
  background: #fafafa;
`

const Team = props => (
  <TeamSection>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header className="text-center">Team.</Header>
          <p className="text-center">
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta pariatur architecto doloremque iusto molestias dolorem cumque accusamus, temporibus. Obcaecati sunt rem facilis est quas ea sint quam fugit fuga, aut.</small>
          </p>
        </div>
      </div>
      <div className="row">
        {
          [...Array(4)].map(i => (
            <div className="col-12 col-md-3">
              <div className="card text-center" style={{ width: '100%', marginBottom: '20px' }}>
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <button className="btn btn-lg btn-secondary">
            JOIN THE CLAN.
          </button>
          <p className="text-center">
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
          </p>
        </div>
      </div>
    </div>
  </TeamSection>
)

export default Team
