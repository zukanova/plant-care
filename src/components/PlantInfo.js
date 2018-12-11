import React, { Component } from 'react'
import styled from 'styled-components'

import background from '../Images/background.jpg'
const PlantInfo = styled.section`
  /* background-image: url(${background}); */
  background-image: contain;
  height: 140px;
  margin: 7%;
  margin-top: 15px;
  margin-bottom: 12px;
  background-color: white;
  font-family: 'Muli';
  border-top: 1px solid black;
  border-bottom: 1px solid gainsboro;
  /* box-shadow: 0 2px 6px 0 rgba(196, 196, 196, 0.5); */

  .header {
    margin-top: 10px;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    font-weight: 600;
    color: #64a61b;
  }
  p {
    margin: 5px;
    font-size: 15px;
    line-height: 1.5;
  }
`

export default class PlantInfoEl extends Component {
  render() {
    return (
      <PlantInfo img={background}>
        <div className="header">10 POPULAR HOUSPLANTS</div>
        <p>
          Adding plants to your home décor improves air quality and adds a
          living design element. There are many plants to choose from - these
          are the most bulletproof.
        </p>
      </PlantInfo>
    )
  }
}
