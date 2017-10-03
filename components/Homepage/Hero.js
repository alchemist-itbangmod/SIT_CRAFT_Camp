import React from 'react'
import styled from 'styled-components'
import colors from '../Core/colors'
import { darken } from 'polished'
import { Section } from '../Core/Layout'

const HeroSection = styled(Section)`
  color: white;
  font-family: 'PWScratchedFont';
  background: radial-gradient(circle, ${colors.blue} 0, ${darken(0.15, colors.blue)} 120%);
`

const Header = styled.h1`
  font-size: 6em;
  padding-top: calc(80px + 20vh);
`

class Hero extends React.PureComponent {
  render() {
    return (
      <HeroSection>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header>SIT CRAFT Camp</Header>
              <p>
                <span>14-21 October 2017</span>
                <span>School of Information Technology</span>
              </p>
            </div>
          </div>
        </div>
      </HeroSection>
    )
  }
}

export default Hero