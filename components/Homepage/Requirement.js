import React from 'react'
import styled from 'styled-components'
import { Section } from '../Core/Layout'

import colors from '../Core/colors'
import { darken } from 'polished'

const Header = styled.h2`
  font-size: 3.8em;

  small {
    font-size: 70%;
    opacity: 0.9;
  }

  @media(max-width: 768px) {
    font-size: 2.6em;
  }
`

const Info = styled.div`
  ol {
    text-indent: .2em;
    font-size: 20px;

    li {
      margin: 5px;
    }
  }
`

const Highlight = styled.span`
  color: ${props => darken(0.05, colors.team[props.clan])};
  letter-spacing: 0.04em;
`

const Whatis = props => (
  <Section>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 order-2 order-sm-1">
          <img src="/static/images/logo-requirement.png" className="img-fluid" alt="Logo" />
        </div>
        <div className="col-sm-6 order-1 order-sm-2">
          <Header>
            <small>Craftsman</small>
            <br />
            Requirement.
          </Header>
          <Info>
            <ol>
              <li>ชั้นมัธยมศึกษาปีที่ 5 - 6</li>
              <li>สายการเรียน วิทย์-คณิต/วิทย์-คอม/ศิลป์-คำนวณ</li>
              <li>เกรดเฉลี่ยรวม ไม่ตำ่กว่า 2.50</li>
              <li>มีความรู้พื้นฐานในสาขาที่ต้องการสมัครเข้าร่วม ดังต่อไปนี้</li>
              <ul>
                <li><Highlight clan={0}>Developer Clan</Highlight> ต้องมีพื้นฐานการเขียนโปรแกรมมาก่อน</li>
                <li><Highlight clan={1}>UI/UX Designer Clan</Highlight> ต้องมีพื้นฐานด้านการออกแบบมาก่อน</li>
                <li><Highlight clan={2}>Infrastructure Clan</Highlight> ต้องมีพื้นฐานการลินุ๊กซ์ การใช้งานเซิฟเวอร์เบื้องต้น HTTPS มาก่อน</li>
                <li><Highlight clan={3}>Game Developer Clan</Highlight> ต้องมีพื้นฐานการพัฒนาเกมเบื้องต้น มาก่อน</li>
              </ul>
            </ol>
          </Info>
        </div>
      </div>
    </div>
  </Section>
)

export default Whatis
