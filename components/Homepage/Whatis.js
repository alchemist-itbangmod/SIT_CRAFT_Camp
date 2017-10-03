import React from 'react'
import styled from 'styled-components'
import { Section } from '../Core/Layout'

const Header = styled.h2`
  font-size: 3.2em;
`

const Whatis = props => (
  <Section>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Header>
            <small>What is</small>
            <br />
            SIT CRAFT Camp.
          </Header>
        </div>
        <div className="col-sm-6" />
      </div>
    </div>
  </Section>
)

export default Whatis
