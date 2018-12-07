import React, { Component } from 'react'
import PropTypes from 'prop-types'
import lightSrc from '../images/light.svg'
import dropSrc from '../images/drop.svg'
import styled from 'styled-components'

const Need = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: white;
`

const Indication = styled.section`
  font-family: 'Muli';
  font-weight: 400;
  font-size: 14px;

  color: #64a61b;
  align-self: center;
`

const Amount = styled.section`
  align-self: center;

  .light {
    margin-left: 2px;
  }

  .drop {
    margin-left: 4px;
    margin-right: 3px;
  }

  .disabled {
    opacity: 0.4;
  }
`

export default class IconRange extends Component {
  static propTypes = {
    text: PropTypes.string,
    icon: PropTypes.oneOf(['light', 'drop']),
    amount: PropTypes.number
  }

  static defaultProps = {}

  handleClick(total, index) {
    this.props.onSelectAmount && this.props.onSelectAmount(total - index)
  }

  createIconsArray(amount, icon) {
    const src = icon === 'light' ? lightSrc : dropSrc
    const total = 3
    return new Array(total).fill().map((_, index) => {
      const isDisabled = index + 1 <= total - amount
      return (
        <img
          onClick={() => this.handleClick(total, index)}
          className={isDisabled ? icon + ' disabled' : icon}
          src={src}
          alt=""
          key={index}
        />
      )
    })
  }

  renderIcons(iconsArray) {
    return iconsArray.map(iconHTML => {
      return iconHTML
    })
  }

  render() {
    const { text, icon, amount } = this.props
    return (
      <Need>
        <Indication> {text} </Indication>
        <Amount icon={icon}>
          {this.renderIcons(this.createIconsArray(amount, icon))}
        </Amount>
      </Need>
    )
  }
}
