import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const LightNeed = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: white;
`

const Indication = styled.section`
  font-family: 'Muli';
  font-weight: 400;
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
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  static defaultProps = {}

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

  renderIcons(iconsArray) {
    return iconsArray.map(iconHTML => {
      return iconHTML
    })
  }

  render() {
    const { text, icon } = this.props
    return (
      <LightNeed>
        <Indication> {text} </Indication>
        <Amount>{this.renderIcons(this.createIconsArray(icon))}</Amount>
      </LightNeed>
    )
  }
}
