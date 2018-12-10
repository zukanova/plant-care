import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as HomeIcon } from '../images/home.svg'
import { ReactComponent as UserIcon } from '../images/user.svg'

const Wrapper = styled.nav`
  display: flex;
  border-top: 2px solid white;

  svg {
    height: 24px;
    color: #bcbcbc;
  }

  a:any-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: white;
    box-shadow: 1px -1px 7px 0 #dedede;

    &.active svg {
      color: #64a61b;
    }
  }
`

export default props => (
  <Wrapper data-cy="Navigation">
    <NavLink exact activeClassName="active" to="/">
      <HomeIcon />
    </NavLink>
    <NavLink activeClassName="active" to="/user">
      <UserIcon />
    </NavLink>
  </Wrapper>
)
