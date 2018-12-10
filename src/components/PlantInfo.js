import React, { Component } from 'react'
import styled from 'styled-components'

const PlantInfo = styled.section`
  height: 70px;
  margin: 7%;
  margin-top: 10px;
  background-color: white;
  font-family: 'Muli';
  border: 1px solid #dcdcdc;
  box-shadow: 0 2px 6px 0 rgba(196, 196, 196, 0.5);
`

export default class PlantInfoEl extends Component {
  render() {
    return <PlantInfo />
  }
}
