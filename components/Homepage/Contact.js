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

  a  {
    color: white;
    font-weight: bold;
  }
`

const Manu = styled.ul`
  list-style: none;
  display: inline-block;
  padding: 0;

  li {
    display: inline-block;
    &:not(:first-child):before {
      content: "/";
      padding-left: 8px;
      padding-right: 8px;
    }
  }

  @media(max-width: 768px) {
    li {
      font-size: 80%;
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
            <div className="col-12 col-sm-6 text-center text-sm-left">
              <i className="fa fa-code" />
              {` with `}
              <i className="fa fa-heart" />
              {` by `}
              <a href="https://alchemist.itbangmod.in.th">Alchemist</a>
            </div>
            <div className="col-12 col-sm-6 text-center text-sm-right">
              <Manu>
                <li>facebook: <a href="https://www.facebook.com/SIT.Family/">@SIT.Family</a></li>
                <li>โทรศัพท์: <a href="tel:024709887">02-4709887</a> (พี่รุ่ง)</li>
              </Manu>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContactSection>
)

export default Contact
