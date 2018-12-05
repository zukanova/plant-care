import React, { Component } from 'react'
import styled from 'styled-components'
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Card from './Card'
import Form from './Form'

import headerSrc from '/images/header.svg'
import CardInfo from '../data.js'
// import data from '../data.js'

const Header = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 5%;
  height: 10%;
`

export default class App extends Component {
  state = {
    plants: this.load()
  }

  save() {
    localStorage.setItem(
      'Plant-Care-App--plants',
      JSON.stringify(this.state.plants)
    )
  }

  load() {
    try {
      return (
        JSON.parse(localStorage.getItem('Plant-Care-App--plants')) || CardInfo
      )
    } catch (err) {
      return CardInfo
    }
  }

  componentDidUpdate() {
    this.save()
  }

  createCard(newCard) {
    this.setState({ plants: [newCard, ...this.state.plants] })
  }

  renderAllCards() {
    return this.state.plants.map((item, index) =>
      this.renderNewCard(item, index)
    )
  }

  renderNewCard(item, index) {
    const { title, subtitle, lightAmount, waterAmount, img } = item
    return (
      <Card
        title={title}
        subtitle={subtitle}
        light={lightAmount}
        water={waterAmount}
        key={index}
        img={img}
      />
    )
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <img src={headerSrc} alt="" />
        </Header>
        <Form createCard={newCard => this.createCard(newCard)} />
        {this.renderAllCards()}
      </React.Fragment>
    )
  }
}
