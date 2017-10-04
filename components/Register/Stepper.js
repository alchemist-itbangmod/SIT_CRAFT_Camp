import React from 'react'
import styled from 'styled-components'

const Step = styled.ol`
  display: flex;
  width: 100%;
  margin: 70px 0;

  li {
    color: #fff;
    flex: 1;
    font-size: 16px;
    padding-top: 15px;
    position: relative;
    text-align: center;
    list-style: none;

    &::after {
      border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.4);
      content: "";
      height: 15px;
      left: calc(50% - 7.5px);
      position: absolute;
      top: calc(-7.5px + 1.5px);
      width: 15px;
      z-index: 1;
    }

    &.completed::after {
      background-color: #fff;
      border-color: #fff;
    }

    &.completed:not(:first-child)::before {
      background-color: #fff;
    }

    &:not(:first-child)::before {
      background-color: rgba(255,255,255,0.4);
      border-radius: 2px;
      content: "";
      height: 2px;
      left: calc(-50% + 15px);
      position: absolute;
      top: 0;
      width: calc(100% - 30px);
    }
  }
`

const Stepper = ({ section }) => (
  <Step>
    <li className={(section === 1 || section === 2 || section === 3) && `completed`}>ลงทะเบียนด้วย Github</li>
    <li className={(section === 2 || section === 3) && `completed`}>กรอกข้อมูลส่วนตัว</li>
    <li className={section === 3 && `completed`}>เสร็จสิ้น!</li>
  </Step>
)

export default Stepper
