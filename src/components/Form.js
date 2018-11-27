import React, { Component } from 'react'
import PropTypes from 'prop-types'
import lightSrc from '../images/light.svg'

import styled from 'styled-components'

const Form = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 3%;
  margin: 7%;
  background-color: white;
  height: 20%;
  font-family: 'Muli';
  border: 1px solid #dcdcdc;
  box-shadow: 0 2px 6px 0 rgba(196, 196, 196, 0.5);
`

export default class FormEl extends Component {
  render() {
    return (
      <Form>
        <div className="FormTitle">ADD YOUR PLANTS HERE</div>
        <input type="text" id="Head" placeholder="Plantname" />
        <input type="text" id="Subhead" placeholder="Description" />
        <div>
          <div className="ColumnRight" />
          <button className="AddButton"></button>
          </div>
          <div className="ColumnLeft" />
          <Light><img className="LightIcon" src={lightSrc} alt=""></img>
          <img className="LightIcon" src={lightSrc} alt="">
          <img className="LightIcon" src={lightSrc} alt=""></img></img>
          </Light>
          <Water text="Water" icon={water} />
        </div>
      </Form>
    )
  }
}
