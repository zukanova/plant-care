import React, { Component } from 'react'
import styled from 'styled-components'

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
