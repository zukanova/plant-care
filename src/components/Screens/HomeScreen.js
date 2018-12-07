import React, { Component } from 'react'
import styled from 'styled-components'
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Card from '../Card'
import Header from '../Header'
import Navigation from '../Navigation'

import CardInfo from '../../data.js'

export const Wrapper = styled.section`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 50px auto 45px;
  grid-template-columns: 1fr;
  height: 100vh;
`

export const DisplayContent = styled.section`
  display: block;
  overflow-y: scroll;
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
      <Wrapper>
        <Header />
        <DisplayContent>{this.renderAllCards()}</DisplayContent>
        <Navigation />
      </Wrapper>
    )
  }
}
