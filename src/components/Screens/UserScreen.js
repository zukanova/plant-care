import React, { Component } from 'react'
import styled from 'styled-components'

import Form from '../Form/Form'
import Header from '../Header'
import Navigation from '../Navigation'
import Card from '../Card'

const Wrapper = styled.section`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: 50px auto 45px;
  grid-template-columns: 1fr;
  height: 100vh;
`

const DisplayContent = styled.section`
  display: block;
  overflow-y: scroll;
`

export default class UserScreen extends Component {
  renderAllCards() {
    return this.props.userPlants.map((item, index) =>
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
        <DisplayContent>
          <Form createCard={newCard => this.props.createCard(newCard)} />
          {this.renderAllCards()}
        </DisplayContent>
        <Navigation />
      </Wrapper>
    )
  }
}
