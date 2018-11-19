import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Card from './Card'
// import Config from './Config'

// const Wrapper = styled.section`
//   display: grid;
//   grid-template-rows: auto 50px;
//   height: 100vh;
// `

export default class App extends Component {
  render() {
    return <Card />
  }
}
