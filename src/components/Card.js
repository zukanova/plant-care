import React, { Component } from 'react'

import styled from 'styled-components'
import Need from './Need'

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
    grid-template-rows: 90px 20px 20px;
    grid-gap: 3%;
    padding: 6% 10% 6% 0;
  }

  .Head {
    align-self: start;
    font-family: Muli-ExtraBold;
    font-size: 21px;
    color: #030303;
    overflow-y: scroll;
    padding-bottom: 10px;
  }
  .Subhead {
    font-family: Muli-Regular;
    font-size: 15px;
    color: #030303;
  }
`

export default class Separator extends Component {
  render() {
    return (
      <Card className="Container">
        <div className="ColumnLeft">
          <img className="PlantImage" src="../../images/philodendron.jpg" />
        </div>
        <div className="ColumnRight">
          <div className="Head">
            Monstera
            <div className="Subhead">Subhead</div>
          </div>
          <Need />
          <Need />
        </div>
      </Card>
    )
  }
}
