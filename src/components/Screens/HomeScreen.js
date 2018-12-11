import React, { Component } from 'react'
import styled from 'styled-components'
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Card from '../Card'
import Header from '../Header'
import PlantInfo from '../PlantInfo'
import Navigation from '../Navigation'

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

export default class HomeScreen extends Component {
  componentDidUpdate() {
    this.save()
  }

  renderAllCards() {
    return this.props.plants.map((item, index) =>
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
          <PlantInfo />
          {this.renderAllCards()}
        </DisplayContent>
        <Navigation />
      </Wrapper>
    )
  }
}
