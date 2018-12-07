import React, { Component } from 'react'

import Form from '../Form'
import Header from '../Header'

export default class UserScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form createCard={newCard => this.createCard(newCard)} />
        {this.renderAllCards()}
      </React.Fragment>
    )
  }
}
