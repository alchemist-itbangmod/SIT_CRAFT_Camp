import React from 'react'
import { injectGlobal } from 'styled-components'

// import Navbar from './Navbar'
import Hero from './Hero'
import Whatis from './Whatis'
import Team from './Team'
import Requirement from './Requirement'
import Agenda from './Agenda'
import Slogan from './Slogan'
import Contact from './Contact'

injectGlobal`
  @font-face {
    font-family: 'PWScratchedFont';
    src: url('/static/fonts/pw-scratched-font.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Supermarket';
    src: url('/static/fonts/supermarket.ttf') format('ttf');
  }

  body {
    font-family: 'Supermarket';
    letter-spacing: .024681em;
    -webkit-font-smoothing: antialiased;
    margin: 0 !important;
    padding: 0 !important;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'PWScratchedFont';
    letter-spacing: .024681em;
  }
`

const IndexPage = props => {
  /* eslint-disable */
  console.log("%c SIT CRAFT Camp. ", "background: #ddd; color: #336699; font-size: 26px; font-style: italic; font-weight:700")
  console.log("if you inspect our code. you can see our repository in Github if you come in SIT CRAFT Camp. Join us ! https://craft.sitchallenge.com/register")
  console.log("%c## Powered by Alchemist @SIT, KMUTT ##", "font-style: italic")
  /* eslint-enable */

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Whatis />
      <Team />
      <Requirement />
      {/* <Agenda /> */}
      <Slogan />
      <Contact />
    </div>
  )
}

export default IndexPage
