import React from 'react'
import styled from 'styled-components'

import colors from '../Core/colors'
import { darken } from 'polished'

const ContactSection = styled.div`
  padding: 30px 0 10px;
  color: white;
  background: ${darken(0.05, colors.blue)};

  hr {
    border-top: 1px solid rgba(255,255,255,.1);
  }
`

const Manu = styled.ul`
  list-style: none;
  display: inline-block;

  li {
    display: inline-block;
    &:not(:first-child):before {
      content: "/";
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`
const Contact = props => (
  <ContactSection>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h3>SIT CRAFT Camp.</h3>
          <hr />
          <div className="row">
            <div className="col-3">
              <small>{`© 2017 Alchemist`}</small>
            </div>
            <div className="col-9 text-right">
              <Manu>
                <li><small>WHAT IS</small></li>
                <li><small>TEAM</small></li>
                <li><small>SLOGAN</small></li>
              </Manu>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContactSection>
)

export default Contact
