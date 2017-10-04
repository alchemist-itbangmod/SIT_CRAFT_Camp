import React from 'react'
import { injectGlobal } from 'styled-components'

// import Navbar from './Navbar'
import Hero from './Hero'
import Whatis from './Whatis'
import Team from './Team'
<<<<<<< HEAD
import Requirement from './Requirement'
=======
import Agenda from './Agenda'
>>>>>>> 6a401d6af6f215e72efde928c3274c3cda0599db
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

const IndexPage = props => (
  <div>
    {/* <Navbar /> */}
    <Hero />
    <Whatis />
    <Team />
<<<<<<< HEAD
    <Requirement />
=======
    <Agenda />
>>>>>>> 6a401d6af6f215e72efde928c3274c3cda0599db
    <Slogan />
    <Contact />
  </div>
)

export default IndexPage
