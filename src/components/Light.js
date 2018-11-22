import React, { Component } from 'react'

import styled from 'styled-components'

const LightNeed = styled.section`
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

  .LightIcon {
    margin-left: 2px;
  }
`

export default class Light extends Component {
  createIconsArray(amount) {
    let iconsArray = []
    for (let i = 0; i < amount; i++) {
      iconsArray.push(
        <img
          className="LightIcon"
          src="../../images/light.svg"
          alt=""
          key={i}
        />
      )
    }
    return iconsArray
  }

  renderIcons(iconsArray, index) {
    return iconsArray.map(iconHTML => {
      return iconHTML
    })
  }

  render() {
    const { text, icon, index } = this.props
    return (
      <LightNeed>
        <Indication> {text} </Indication>
        <Amount key={index}>
          {this.renderIcons(this.createIconsArray(icon))}
        </Amount>
      </LightNeed>
    )
  }
}
