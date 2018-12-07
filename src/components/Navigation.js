import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import homeIconSrc from '../images/home.svg'
import userIconSrc from '../images/user.svg'

const Wrapper = styled.nav`
  display: flex;
  border-top: 2px solid white;

  a:any-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: white;
    box-shadow: 1px -1px 7px 0 #dedede;

    &.active {
      color: #64a61b;
    }

    &:first-child {
      border-right: 1px solid white;
    }
  }
`

export default props => (
  <Wrapper data-cy="Navigation">
    <NavLink exact activeClassName="active" to="/">
      <img src={homeIconSrc} alt="" />
    </NavLink>
    <NavLink activeClassName="active" to="/user">
      <img src={userIconSrc} alt="" />
    </NavLink>
  </Wrapper>
)
