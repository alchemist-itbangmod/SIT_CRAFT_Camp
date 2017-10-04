import React from 'react'
import styled from 'styled-components'
import colors from '../Core/colors'
import { darken } from 'polished'
import { Section } from '../Core/Layout'

const HeroSection = styled(Section)`
  color: white;
  font-family: 'PWScratchedFont';
  background: url("/static/images/backgroud.png"), radial-gradient(circle, ${colors.blue} 0, ${darken(0.15, colors.blue)} 120%);
  background-attachment: fixed;
  min-height: 100vh;
`

const Header = styled.h1`
  font-size: 6.2em;
  padding-top: calc(80px + 20vh);
`

const Subtitle = styled.p`
  span {
    display: block;
    font-size: 2.2em;

    &.small {
      font-size: 1.2em;
    }
  }
`

class Hero extends React.PureComponent {
  render() {
    return (
      <HeroSection>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header>SIT CRAFT Camp</Header>
              <Subtitle>
                <span>14-21 October 2017</span>
                <span className="small">School of Information Technology</span>
                <span className="small">King Mongkut's University of Technology Thonburi</span>
              </Subtitle>
            </div>
          </div>
        </div>
      </HeroSection>
    )
  }
}

export default Hero
