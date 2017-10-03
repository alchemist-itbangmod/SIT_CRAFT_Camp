import React from 'react'
import styled from 'styled-components'

const Step = styled.ol`
  display: flex;
  width: 100%;

  li {
    color: #fff;
    flex: 1;
    font-size: 14px;
    padding-top: 15px;
    position: relative;
    text-align: center;
    list-style: none;

    &::after {
      border-radius: 50%;
      border: 2px solid rgba(255,255,255,0.6);
      content: "";
      height: 15px;
      left: calc(50% - 7.5px);
      position: absolute;
      top: calc(-7.5px + 1.5px);
      width: 15px;
      z-index: 1;
    }

    &:not(:first-child)::before {
      background-color: rgba(255,255,255,0.6);
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

export default class Stepper extends React.Component {
  render() {
    return (
      <Step>
        <li>Register with Github</li>
        <li>Fill your detail</li>
        <li>Finish!</li>
      </Step>
    )
  }
}
