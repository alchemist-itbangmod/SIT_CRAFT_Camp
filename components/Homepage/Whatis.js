import React from 'react'
import styled from 'styled-components'
import { Section } from '../Core/Layout'

const Header = styled.h2`
  font-size: 3.8em;

  small {
    font-size: 70%;
    opacity: 0.9;
  }
`

const Info = styled.div`
  p {
    text-indent: 1em;
    font-size: 18px;

    &.small {
      font-size: 1.1em;
    }

    @media(max-width: 768px) {
      &.small {
        font-size: 1em;
      }
    }
  }
`

const Whatis = props => (
  <Section>
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Header>
            <small>What is</small>
            <br />
            SIT CRAFT Camp.
          </Header>
          <Info>
            <p>"SIT CRAFT Camp" คือ พื้นที่แห่งการเรียนรู้ที่เปิดโอกาสให้กับน้องๆ ชั้นมัธยมศึกษาปีที่ 5 และ 6 ที่มีพื้นฐานทางด้านไอทีในสาขาต่างๆ มาร่วมกันเรียนรู้ขั้นตอนและกระบวนการในการพัฒนาซอฟแวร์ ภายใต้สถานการณ์ต่างๆ ที่เกิดขึ้นจริง ได้สัมผัสการใช้ชีวิตในรั้วมหาวิทยาลัย ภายใต้คณะเทคโนโลยีสารสนเทศ และรู้จักคณะเทคโนโลยีสารสนเทศมากขึ้น</p>
            <p>"SIT CRAFT Camp" เป็น ค่ายไป - กลับ (ไม่ค้างคืน) โดยน้องๆ ที่ได้รับคัดเลือกจะได้เรียนรู้ ขั้นตอนและวิธีการ รวมไปถึงเครื่องมือที่ช่วยอำนวยความสะดวกในการพัฒนาซอฟแวร์ หลังจากนั้นน้องๆ จะต้องร่วมมือกันพัฒนาซอฟแวร์ให้สำเร็จใช้ได้จริง ภายในเวลา 8 วัน โดยมีพี่ๆ คอยช่วยเหลือและให้คำแนะนำกับน้องตลอดการทำงาน</p>
            <p>"SIT CRAFT Camp" ไม่เพียงมอบให้แต่ความรู้ แต่เป็นพื้นที่ที่น้องๆ ต้องอาศัยความสามารถ และความร่วมมือ ในการพัฒนาซอฟแวร์อย่างเป็นระบบ</p>
            <p className="small"><u>หมายเหตุ</u> สมัครฟรี ไม่มีค่าใช้จ่าย ยกเว้น หากน้อง ๆ คนไหน ไม่สะดวกในการเดินทางไป-กลับ ทางคณะฯ จะจัดหาพอพักของมหาวิทยาลัยให้ แต่ต้องเสียค่าใช้จ่ายเอง</p>
          </Info>
        </div>
        <div className="col-sm-6">
          <img src="/static/images/logo-sit-craft-camp.svg" className="img-fluid" alt="Logo" />
        </div>
      </div>
    </div>
  </Section>
)

export default Whatis
