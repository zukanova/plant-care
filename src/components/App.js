import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Card from './Card'
// import Config from './Config'
// import Home from './Home'
// import Water from './Water'
// import Light from './Light'

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
    const { title, subtitle, light, water } = item
    return (
      <Card
        title={title}
        subtitle={subtitle}
        light={light}
        water={water}
        key={index}
      />
    )
  }

  render() {
    console.log(CardInfo)
    return (
      <React.Fragment>
        <Header>
          <img src="../../images/header.svg" alt="" />
        </Header>
        {this.renderAllCards()}
      </React.Fragment>
    )
  }
}
