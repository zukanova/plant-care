import React, { Component } from 'react'

import styled from 'styled-components'
import headerSrc from '../Images/header.svg'

const Header = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 12px;
  height: 10%;
`

export default class HeaderEl extends Component {
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
