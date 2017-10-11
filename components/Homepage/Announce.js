import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import colors from '../Core/colors'
import { darken, opacify } from 'polished'

import { Section } from '../Core/Layout'
import contents from './content.json'

const AnnounceSection = styled(Section)`
  background: #fafafa;

  .promo {
    font-size: 24px;
    padding-top: 16px;

    @media(max-width: 768px) {
      font-size: 20px;
    }
  }
`

const Header = styled.h2`
  font-size: 3.8em;
  margin: 20px;

  &.small {
    font-size: 2.2em;
    border-top: 1px dashed #ccc;
    padding: 20px;
  }
`

const Clan = styled.div`
  width: 100%;
  margin-bottom: 20px;
  transition: all .4s;

  .card-body {
    padding: 1rem;
  }

  h3 {
    font-size: 22px;

    @media(max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 20px;
    color: #333;
    margin: 0;
    min-height: 130px;

    &.requirement {
      font-size: 18px;
      min-height: 0;
    }

    @media(max-width: 768px) {
      min-height: 100px;
    }
  }
`

const Button = styled.button`
  color: #333;
  background-color: white;
  border-color: #ccc;
  letter-spacing: .3px;
  cursor: pointer;
  padding: 10px 38px;

  span {
    display: inline-block;
    font-size: 32px;
    padding-top: 7px;
  }
`

const Announce = props => (
  <AnnounceSection>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <Header className="text-center">Announcement</Header>
          <p className="text-center">
            <small />
          </p>
          <p className="promo text-center">
            ประกาศรายชื่อน้อง ๆ ผู้มีสิทธิ์เข้าร่วมค่าย SIT CRAFT Camp <br />
สำหรับน้องๆ ที่ได้รับสิทธิ์ในการเข้าร่วมค่าย <br />
<b>กรุณานำใบขออนุญาติผู้ปกครองที่ทำการเซ็นอนุญาตเรียบร้อยแล้วมาส่ง ณ วันลงทะเบียน </b><br />
และทางคณะจะดำเนินการติดต่อน้อง ๆ ผ่านทางอีเมลที่แจ้งไว้
          </p>
          <a href='/static/documents/Announcement-SIT-CRAFT-Camp.pdf' target='_blank'>
            <Button
              className="btn btn-lg btn-default"
            >
              <span>ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมค่าย SIT CRAFT Camp</span>
            </Button>
          </a>
          <br />
          <br />
          <a href='/static/documents/Approve-SIT-CRAFT-Camp.pdf' target='_blank'>
            <Button
              className="btn btn-secondary"
            >
              <span>ใบขออนุญาติผู้ปกครอง</span>
            </Button>
          </a>
        </div>
        <div className="col-6">
          <p className="promo text-center">
<b>อุปกรณ์ที่ต้องเตรียมมา ณ วันค่าย </b><br />
1. ใบขออนุญาตผู้ปกครองที่ทำการเซ็นอนุญาตเรียบร้อยแล้ว<br />
2. คอมพิวเตอร์พกพา ยกเว้นผู้ที่ทำการแจ้งความประสงค์ขอยืมคอมพิวเตอร์<br />
3. ค่าหอพักนักศึกษามหาวิทยาลัยฯ คนละ 560 บาท (7 คืน) สำหรับผู้ที่แจ้งความประสงค์เข้าพักหอพัก<br />
4. ยาประจำตัว สำหรับผู้ที่มีโรคประจำตัว<br />
4. เสื้อกันหนาว <br />
<br />
<b>การแต่งกาย</b><br />
ชุดสุภาพ กางเกงขายาว รองเท้าผ้าใบ <br />
<br />
<ul>ลงทะเบียนวันเสาร์ที่ 14 ตุลาคม 2560 เวลา 08.30 - 09.00 น. ชั้น 4 อาคารเรียนรวม 2 มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี<ul>
<br />
          </p>
        </div>
      </div>
    </div>
  </AnnounceSection>
)

export default Announce
