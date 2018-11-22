import React, { Component } from 'react'

import styled from 'styled-components'

const WaterNeed = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: white;
`

const Indication = styled.section`
  font-family: Muli-SemiBold;
  font-size: 15px;
  color: #64a61b;
  align-self: center;
`

const Amount = styled.section`
  align-self: center;

  .AmountIcon {
    margin-left: 4px;
    margin-right: 3px;
  }
`

export default class Separator extends Component {
  createIconsArray(amount) {
    let iconsArray = []
    for (let i = 0; i < amount; i++) {
      iconsArray.push(
        <img className="AmountIcon" src="../../images/drop.svg" alt="" />
      )
    }
    return iconsArray
  }

  renderIcons(iconsArray) {
    return iconsArray.map(iconHTML => {
      return iconHTML
    })
  }

  render() {
    const { text, icon } = this.props
    return (
      <WaterNeed>
        <Indication> {text} </Indication>
        <Amount>{this.renderIcons(this.createIconsArray(icon))}</Amount>
      </WaterNeed>
    )
  }
}
