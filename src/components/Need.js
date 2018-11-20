import React, { Component } from 'react'

import styled from 'styled-components'

const Need = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: white;
`

const Indication = styled.section`
  font-family: Muli-SemiBold;
  font-size: 15px;
  color: #64a61b;
  align-self: center;
`

const Amount = styled.section`
  align-self: center;

  .AmountIcon {
    margin-left: 3px;
  }
`

export default class Separator extends Component {
  render() {
    return (
      <Need>
        <Indication> Water </Indication>
        <Amount>
          <img className="AmountIcon" src="../../images/drop.svg" />
          <img className="AmountIcon" src="../../images/drop.svg" />
          <img className="AmountIcon" src="../../images/drop.svg" />
        </Amount>
      </Need>
    )
  }
}
