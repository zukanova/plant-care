import React, { Component } from 'react'
import IconRange from './IconRange'
import addIconSrc from '../images/addIcon.svg'
// import exampleSrc from '../images/placeholderplant.jpg'

import styled from 'styled-components'

const Form = styled.section`
  background-color: white;
  border: 1px solid #dcdcdc;
  box-shadow: 0 2px 6px 0 rgba(196, 196, 196, 0.5);
  color: #64a61b;
  display: flex;
  flex-direction: column;
  font-family: 'Muli';
  font-weight: 600;
  height: auto;
  letter-spacing: 1.2px;
  margin: 10px;
  padding: 10px;

  .formTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .openIcon {
    opacity: 0.4;
    transform: rotate(45deg);
    transition: all 0.7s ease;
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
    /* transition: all 0.5s ease;
    transform: rotate(45deg); */
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 40px 40px 70px;
  grid-gap: 4px;

  .textInput {
    align-self: center;
    border: 1px solid #64a61b;
    border-left: 0;
    border-radius: 7px;
    border-right: 0;
    border-top: 0;
    color: #64a61b;
    font-family: 'Muli';
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 2;
    padding: 8px;
  }

  input:focus {
    outline: 1px solid gainsboro;
    transform: rotate (45deg);
  }

  ::placeholder {
    color: F5F5F5;
  }
`
const Below = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5px;
  margin-top: 7px;

  .columnRight {
    display: grid;

    grid-gap: 7px;
    grid-template-rows: 1fr 1fr;
    align-items: center;
  }

  button {
    background: #64a61b;
    border: 0px;
    border-radius: 2px;
    height: 23px;
    box-shadow: 0 2px 3px 0 rgba(127, 126, 126, 0.2);
    font-family: 'Muli';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: white;
    width: 95%;
  }

  button:hover {
    background: #487713;
    box-shadow: 0 2px 3px 0 rgba(127, 126, 126, 0.5);
  }

  [type='file'] {
    height: 0;
    overflow: hidden;
    width: 0;
  }

  [type='file'] + label {
    border-radius: 2px;
    justify-content: center;

    border: 1px solid gainsboro;
    color: #64a61b;
    display: inline-block;
    font-family: 'Muli';
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 9px;
    padding: 5px;
    position: relative;
    transition: all 0.3s;
    vertical-align: middle;
    width: 95%;

    &:hover {
      border: 1px solid #64a61b;
    }

    /* .sectionTop {
      padding-bottom: 20px;
    } */
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

  nameInputRef = React.createRef()
  descriptionInputRef = React.createRef()

  toggleCard = () => {
    this.setState({ showCard: !this.state.showCard })
  }

  selectLight = amount => {
    this.setState({ newCard: { ...this.state.newCard, lightAmount: amount } })
  }

  selectWater = amount => {
    this.setState({ newCard: { ...this.state.newCard, waterAmount: amount } })
  }

  resetInput = event => {
    const nameInput = this.nameInputRef.current
    const descriptionInput = this.descriptionInputRef.current
    nameInput.value = ''
    descriptionInput.value = ''
    nameInput.focus()
  }

  render() {
    return (
      <Form>
        <div className="formTitle">
          ADD YOUR PLANTS HERE
          <img
            onClick={() => this.toggleCard()}
            className={this.state.showCard ? 'openIcon' : ''}
            src={addIconSrc}
            alt=""
          />
        </div>

        <Wrapper className={this.state.showCard ? 'visible' : 'hidden'}>
          <input
            type="text"
            className="textInput"
            placeholder="Plantname"
            ref={this.nameInputRef}
            onChange={event => {
              this.setState({
                newCard: { ...this.state.newCard, title: event.target.value }
              })
            }}
          />
          <input
            type="text"
            className="textInput"
            placeholder="Description"
            ref={this.descriptionInputRef}
            onChange={event => {
              this.setState({
                newCard: { ...this.state.newCard, subtitle: event.target.value }
              })
            }}
          />
          <Below>
            <div className="columnLeft">
              <input type="file" className="inputfile" id="file" />
              <label htmlFor="file">Upload image</label>
              <button
                onClick={event => {
                  this.props.createCard(this.state.newCard)
                  this.resetInput(event)
                }}
              >
                ADD A PLANT
              </button>
            </div>
            <div className="columnRight">
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
