import React, { Component } from 'react'

import styled from 'styled-components'
import headerSrc from '../../images/header.svg'

const Header = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 5%;
  height: 10%;
`

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <img src={headerSrc} alt="" />
        </Header>
      </React.Fragment>
    )
  }
}
