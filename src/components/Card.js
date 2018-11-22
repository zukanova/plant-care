import React, { Component } from 'react'

import styled from 'styled-components'
import Light from './Light'
import Water from './Water'

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3%;
  margin: 7%;
  background-color: white;
  height: 20%;
  font-family: Muli;
  border: 1px solid #dcdcdc;
  box-shadow: 0 2px 6px 0 rgba(196, 196, 196, 0.5);

  .ColumnLeft {
    justify-content: center;
    align-content: center;
    padding: 6%;
  }

  .PlantImage {
    height: 140px;
    width: 140px;
    object-fit: cover;
  }

  .ColumnRight {
    display: grid;
    align-self: start;
    grid-template-rows: 90px 22px 22px;
    grid-gap: 3%;
    padding: 6% 10% 6% 0;
  }

  .Head {
    align-self: start;
    font-family: Muli-ExtraBold;
    font-size: 17px;
    color: #030303;
    overflow-y: scroll;
    margin-bottom: 50px;
  }
  .Subhead {
    font-family: Muli-Italic;
    font-size: 15px;
    color: #030303;
  }
`

export default class CardEl extends Component {
  render() {
    const { title, subtitle, water, light } = this.props
    return (
      <Card className="Container">
        <div className="ColumnLeft">
          <img
            className="PlantImage"
            src="../../images/philodendron.jpg"
            alt=""
          />
        </div>
        <div className="ColumnRight">
          <div className="Head">
            {title}
            <div className="Subhead">{subtitle}</div>
          </div>
          <Light text="Licht" icon={light} />
          <Water text="Wasser" icon={water} />
        </div>
      </Card>
    )
  }
}
