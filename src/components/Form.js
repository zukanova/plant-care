import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconRange from './IconRange'
import addIconSrc from '../images/AddIcon.svg'

import styled from 'styled-components'
// import { timingSafeEqual } from 'crypto'

const Form = styled.section`
  display: flex;
  flex-direction: column;
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
    align-items: center;
  }

  .OpenIcon {
    transform: rotate(180deg);
  }

  .hidden {
    overflow: hidden;
    height: 0;
  }

  .visible {
    transition: all 1s ease;
    /* height: 79%; */
  }

  .disabled {
    opacity: 0.4;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 40px 40px 60px;
  grid-gap: 4%;

  input {
    border-radius: 7px;
    border: 1px solid #64a61b;
    border-top: 0px;
    border-left: 0px solid #64a61b;
    border-right: 0px solid #64a61b;
    padding: 2.5%;
    font-family: 'Muli';
    font-weight: 400;
    font-size: 12px;
    line-height: 2;
    letter-spacing: 1px;
    color: #64a61b;
    align-self: center;
  }

  ::placeholder {
    color: F5F5F5;
  }
`
const Below = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

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

  .ColumnLeft {
    display: grid;
    grid-template-rows: 50% 50%;
    /* justify-content: space-between;
    align-items: bottom; */
  }
`

export default class FormEl extends Component {
  static propTypes = {
    // text: PropTypes.string.isRequired,
    // icon: PropTypes.oneOf(['light', 'drop']).isRequired,
    // amount: PropTypes.number.isRequired
  }

  state = {
    showCard: false
  }

  toggleCard = () => {
    console.log('toggleCard')
    this.setState({ showCard: !this.state.showCard })
  }

  render() {
    return (
      <Form>
        <div className="FormTitle">
          ADD YOUR PLANTS HERE
          <img
            onClick={() => this.toggleCard()}
            className="OpenIcon"
            src={addIconSrc}
            alt=""
          />
        </div>

        <Wrapper className={this.state.showCard ? 'visible' : 'hidden'}>
          <input type="text" id="Head" placeholder="Plantname" />
          <input type="text" id="Subhead" placeholder="Description" />
          <Below>
            <div className="ColumnRight">
              <button className="AddButton">ADD A PLANT</button>
            </div>
            <div className="ColumnLeft">
              <section>
                <IconRange />
              </section>
              <section>
                <IconRange />
              </section>
            </div>
          </Below>
        </Wrapper>
      </Form>
    )
  }
}
