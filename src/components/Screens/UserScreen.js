import React, { Component } from 'react'
import styled from 'styled-components'
import CardInfo from '../../data.js'

import Form from '../Form'
import Header from '../Header'
import Navigation from '../Navigation'

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
export default class UserScreen extends Component {
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

  render() {
    return (
      <Wrapper>
        <Header />
        <DisplayContent>
          <Form createCard={newCard => this.createCard(newCard)} />
        </DisplayContent>
        <Navigation />
      </Wrapper>
    )
  }
}
