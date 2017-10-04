import React from 'react'
import styled from 'styled-components'
import colors from '../Core/colors'
import { lighten } from 'polished'
import { Section } from '../Core/Layout'

const SloganSection = styled(Section)`
  background: steelblue;
  background: radial-gradient(circle, ${colors.blue} 0, ${lighten(0.1, colors.blue)} 125%),url('/static/images/gallery/1.jpg') center/cover no-repeat;
`

const Header = styled.h2`
  font-size: 6.3em;
  color: white;

  span {
    &:first-child {
      opacity: 1;
    }
    &:last-child {
      opacity: 0.5;
    }
  }
`

const FirstLatter = styled.img`
  width: 1.1em;
`

const Slogan = props => (
  <SloganSection>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Header>
            <span><FirstLatter src="/static/images/craft/c.png" /></span>
            <span>OACHING</span>
          </Header>
          <Header>
            <span><FirstLatter src="/static/images/craft/r.png" /></span>
            <span>EALISTIC</span>
          </Header>
          <Header>
            <span><FirstLatter src="/static/images/craft/a.png" /></span>
            <span>GILITY</span>
          </Header>
          <Header>
            <span><FirstLatter src="/static/images/craft/f.png" /></span>
            <span>RIENDSHIP</span>
          </Header>
          <Header>
            <span><FirstLatter src="/static/images/craft/t.png" /></span>
            <span>ECHNOLOGY</span>
          </Header>
        </div>
      </div>
    </div>
  </SloganSection>
)

export default Slogan
