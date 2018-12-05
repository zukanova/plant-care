import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import IconRange from './IconRange'

const Card = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3%;
  margin: 7%;
  background-color: white;
  height: 20%;
  font-family: 'Muli';
  border: 1px solid #dcdcdc;
  box-shadow: 0 2px 6px 0 rgba(196, 196, 196, 0.5);

  .ColumnLeft {
    justify-content: center;
    align-content: center;
    padding: 6%;
  }

  .PlantImage {
    height: 140px;
    width: 140px;
    object-fit: cover;
    background-color: #a4da8f;
  }

  .ColumnRight {
    display: grid;
    align-self: start;
    grid-template-rows: 90px 22px 22px;
    grid-gap: 3%;
    padding: 6% 10% 6% 0;
  }

  .Title {
    align-self: start;
    font-family: 'Muli';
    font-weight: 800;
    font-size: 17px;
    color: #030303;
    overflow-y: scroll;
    margin-bottom: 50px;
  }
  .Subtitle {
    font-family: 'Muli';
    font-weight: 400;
    font-style: italic;
    font-size: 15px;
    color: #030303;
  }
`

export default class CardEl extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    water: PropTypes.number.isRequired,
    light: PropTypes.number.isRequired
  }

  render() {
    const { title, subtitle, light, water, img } = this.props
    return (
      <Card data-cy="CardEl">
        <div className="ColumnLeft">
          <img className="PlantImage" src={img} alt="" />
        </div>
        <div className="ColumnRight">
          <div className="Title">
            {title}
            <div className="Subtitle">{subtitle}</div>
          </div>
          <IconRange text="Light" icon={'light'} amount={light} />
          <IconRange text="Water" icon={'drop'} amount={water} />
        </div>
      </Card>
    )
  }
}
