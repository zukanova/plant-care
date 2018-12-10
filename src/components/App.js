import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import UserScreen from './screens/UserScreen'

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 50px;
  height: 100vh;
`

export default class App extends Component {
  state = {
    showAllCards: true
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
            render={() => <HomeScreen showAllCards={this.state.showAllCards} />}
          />
          <Route
            path="/user"
            render={() => (
              <UserScreen
                showAllCards={this.state.showAllCards}
                onToggle={this.toggleShowAllCards}
              />
            )}
          />
        </Wrapper>
      </Router>
    )
  }
}
