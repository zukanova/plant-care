import React, { Component } from 'react'
import IconRange from './IconRange'
import addIconSrc from '../images/AddIcon.svg'

import styled from 'styled-components'

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
  }

  .hidden {
    overflow: hidden;
    height: 0;
  }

  .visible {
    transition: all 1s ease;
  }

  .disabled {
    opacity: 0.4;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 40px 40px 60px;
  grid-gap: 4px;

  input {
    border-radius: 7px;
    border: 1px solid #64a61b;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    padding: 8px;
    font-family: 'Muli';
    font-weight: 400;
    font-size: 12px;
    line-height: 2;
    letter-spacing: 1px;
    color: #64a61b;
    align-self: center;
  }

  input:focus {
    outline: 1px solid gainsboro;
  }

  ::placeholder {
    color: F5F5F5;
  }
`
const Below = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  margin-top: 7px;

  .ColumnLeft {
    padding-top: 28px;
  }
  .AddButton {
    background: #64a61b;
    border: 0px;
    border-radius: 2px;
    width: 98%;
    height: 23px;
    box-shadow: 0 2px 3px 0 rgba(127, 126, 126, 0.2);
    font-family: 'Muli';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: white;
  }

  button:hover {
    background: #487713;
    /* color: #3a7999; */
    box-shadow: 0 2px 3px 0 rgba(127, 126, 126, 0.5);
  }

  .ColumnRight {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-gap: 4px;
    align-items: center;
  }
`

export default class FormEl extends Component {
  state = {
    showCard: false,
    newCard: {
      title: '',
      subtitle: '',
      lightAmount: 0,
      waterAmount: 0
    }
  }

  toggleCard = () => {
    this.setState({ showCard: !this.state.showCard })
  }

  selectLight = amount => {
    this.setState({ newCard: { ...this.state.newCard, lightAmount: amount } })
  }

  selectWater = amount => {
    this.setState({ newCard: { ...this.state.newCard, waterAmount: amount } })
  }

  render() {
    return (
      <Form>
        <div className="FormTitle">
          ADD YOUR PLANTS HERE
          <img
            onClick={() => this.toggleCard()}
            className={
              this.state.showCard
                ? this.toggleCard + ' disabled'
                : this.toggleCard
            }
            src={addIconSrc}
            alt=""
          />
        </div>

        <Wrapper className={this.state.showCard ? 'visible' : 'hidden'}>
          <input
            type="text"
            placeholder="Plantname"
            onChange={event => {
              this.setState({
                newCard: { ...this.state.newCard, title: event.target.value }
              })
            }}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={event => {
              this.setState({
                newCard: { ...this.state.newCard, subtitle: event.target.value }
              })
            }}
          />
          <Below>
            <div className="ColumnLeft">
              <button
                className="AddButton"
                onClick={() => this.props.createCard(this.state.newCard)}
              >
                ADD A PLANT
              </button>
            </div>
            <div className="ColumnRight">
              <section>
                <IconRange
                  text="Light"
                  icon="light"
                  amount={this.state.newCard.lightAmount}
                  onSelectAmount={this.selectLight}
                />
              </section>
              <section>
                <IconRange
                  text="Water"
                  icon="drop"
                  amount={this.state.newCard.waterAmount}
                  onSelectAmount={this.selectWater}
                />
              </section>
            </div>
          </Below>
        </Wrapper>
      </Form>
    )
  }
}
