import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Card from './Card'
import Need from './Need'
// import Config from './Config'

const Header = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 5%;
  height: 10%;
`

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <img src="../../images/header.svg" />
        </Header>
        <Card />
      </React.Fragment>
    )
  }
}
