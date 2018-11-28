import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconRange from './IconRange'
import openIconSrc from '../images/openIcon.svg'

import styled from 'styled-components'

const Form = styled.section`
  display: grid;
  grid-template-rows: 1fr 1.9fr 1.9fr 3fr;
  grid-gap: 3%;
  margin: 7%;
  padding: 2.5%;
  height: 30%;
  background-color: white;
  font-family: 'Muli';
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #64a61b;
  border: 1px solid #dcdcdc;
  box-shadow: 0 2px 6px 0 rgba(196, 196, 196, 0.5);

  .FormTitle {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .OpenIcon {
    transform: rotate(180deg);
  }

  input {
    border-radius: 7px;
    border: 1px solid #64a61b;
    border-top: 0px;
    border-left: 0px solid #64a61b;
    border-right: 0px solid #64a61b;
    font-family: 'Muli';
    font-weight: 400;
    font-size: 12px;
    line-height: 2;
    letter-spacing: 1px;
    color: #64a61b;
    align-self: center;
  }

  .ColumnRight {
    align-self: center;
  }

  .AddButton {
    background: #64a61b;
    border-radius: 2px;
    width: 98%;
    height: 23px;
    box-shadow: 0 2px 4px 0 rgba(127, 126, 126, 0.4);
    font-family: 'Muli';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: white;
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
        <div className="FormTitle">
          ADD YOUR PLANTS HERE{' '}
          <img className="OpenIcon" src={openIconSrc} alt="" />
        </div>
        <input type="text" id="Head" placeholder=" Plantname" />
        <input type="text" id="Subhead" placeholder=" Description" />
        <Below>
          <div className="ColumnRight">
            <button className="AddButton">ADD A PLANT</button>
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
