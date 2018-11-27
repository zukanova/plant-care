import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconRange from './IconRange'
import lightSrc from '../images/light.svg'
import dropSrc from '../images/drop.svg'

import styled from 'styled-components'

const Form = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 3%;
  margin: 7%;
  background-color: white;
  height: 20%;
  font-family: 'Muli';
  color: #64a61b;
  border: 1px solid #dcdcdc;
  box-shadow: 0 2px 6px 0 rgba(196, 196, 196, 0.5);
  width: 345px;
  height: 220px;

  .AddButton {
    background: #64a61b;
    box-shadow: 0 2px 4px 0 rgba(127, 126, 126, 0.5);
  }
`
const Below = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Light = styled.section``
const Water = styled.section``

export default class FormEl extends Component {
  static propTypes = {
    // text: PropTypes.string.isRequired,
    // icon: PropTypes.oneOf(['light', 'drop']).isRequired,
    // amount: PropTypes.number.isRequired
  }

  render() {
    return (
      <Form>
        <div className="FormTitle">ADD YOUR PLANTS HERE</div>
        <input type="text" id="Head" placeholder="Plantname" />
        <input type="text" id="Subhead" placeholder="Description" />
        <Below>
          <div className="ColumnRight">
            <button className="AddButton">Add a plant</button>
          </div>
          <div className="ColumnLeft">
            <Light>
              <IconRange />
            </Light>
            <Water>
              <IconRange />
            </Water>
          </div>
        </Below>
      </Form>
    )
  }
}
