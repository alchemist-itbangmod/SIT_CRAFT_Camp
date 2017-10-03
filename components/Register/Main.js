import React from 'react'
import styled from 'styled-components'
import colors from '../Core/colors'
import { darken } from 'polished'

import { Section } from '../Core/Layout'
import Stepper from './Stepper'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const RegisterSection = styled(Section)`
  color: white;
  background: radial-gradient(circle, ${colors.blue} 0, ${darken(0.15, colors.blue)} 120%);

  hr {
    border-top: 1px dashed rgba(255,255,255,.3);
    margin: 40px 0;
  }

  .btn-outline-light.active,
  .btn-outline-light:active,
  .show>.btn-outline-light.dropdown-toggle{
    color: ${colors.blue};
  }
`

const Header = styled.h1`
  font-family: 'PWScratchedFont';
  font-size: 3.2em;
  margin-bottom: .5em;
  padding-top: calc(60px + 10vh);
`

const Detail = styled.div`
  margin: 40px;
`

class Main extends React.Component {
  render() {
    return (
      <RegisterSection>
        <div className="container">
          <Header className="text-center">SIT CRAFT Camp</Header>
          <Stepper section={2} />
          <Detail>
            {/* <StepOne /> */}
            <StepTwo />
            {/* <StepThree /> */}
          </Detail>
        </div>
      </RegisterSection>
    )
  }
}

export default Main
