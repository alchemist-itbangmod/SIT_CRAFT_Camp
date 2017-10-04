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
      padding-left: 8px;
      padding-right: 8px;
    }

    a  {
      color: white;
      text-decoration: underline;
      text-decoration-style: dotted;
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
              {`© 2017 Alchemist`}
            </div>
            <div className="col-9 text-right">
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
