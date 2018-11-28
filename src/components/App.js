import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Card from './Card'
import Form from './Form'

import headerSrc from '../images/header.svg'
import CardInfo from '../data.js'

const Header = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 5%;
  height: 10%;
`

export default class App extends Component {
  renderAllCards() {
    return CardInfo.map((item, index) => this.renderNewCard(item, index))
  }

  renderNewCard(item, index) {
    const { title, subtitle, lightAmount, waterAmount } = item
    return (
      <Card
        title={title}
        subtitle={subtitle}
        light={lightAmount}
        water={waterAmount}
        key={index}
      />
    )
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <img src={headerSrc} alt="" />
        </Header>
        <Form />
        {this.renderAllCards()}
      </React.Fragment>
    )
  }
}
