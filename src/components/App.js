import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import UserScreen from './Screens/UserScreen'

import CardInfo from '../data.js'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 50px;
  height: 100vh;
`

export default class App extends Component {
  state = {
    showAllCards: true,
    renderNewCard: true,
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

  createCard = newCard => {
    this.setState({ plants: [newCard, ...this.state.plants] })
  }

  toggleShowAllCards = () => {
    this.setState({
      showAllCards: !this.state.showAllCards
    })
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Route
            exact
            path="/"
            render={() => (
              <HomeScreen
                showAllCards={this.state.showAllCards}
                plants={this.state.plants.filter(card => card.user === false)}
              />
            )}
          />
          <Route
            path="/user"
            render={() => (
              <UserScreen
                showAllCards={this.state.showAllCards}
                onToggle={this.toggleShowAllCards}
                userPlants={this.state.plants.filter(
                  card => card.user === true
                )}
                createCard={this.createCard}
              />
            )}
          />
        </Wrapper>
      </Router>
    )
  }
}
