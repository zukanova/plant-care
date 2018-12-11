import React, { Component } from 'react'
import IconRange from '../IconRange'
import addIconSrc from '../../images/addIcon.svg'

import Wrapper from './Wrapper'
import Grid from './Grid'
import Below from './Below'

const CLOUD_NAME = process.env.REACT_APP_CLOUDIFY_CLOUD_NAME
const PRESET = process.env.REACT_APP_CLOUDIFY_PRESET

export default class FormEl extends Component {
  state = {
    showCard: false,
    newCard: {
      title: '',
      subtitle: '',
      lightAmount: 0,
      waterAmount: 0,
      img: null,
      user: true
    }
  }

  nameInputRef = React.createRef()
  descriptionInputRef = React.createRef()

  upload = event => {
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(this.onImageSave)
      .catch(err => console.error(err))
  }

  onImageSave = response => {
    this.setState({
      newCard: {
        ...this.state.newCard,
        img: response.url
      }
    })
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

  resetInput = event => {
    const nameInput = this.nameInputRef.current
    const descriptionInput = this.descriptionInputRef.current
    nameInput.value = ''
    descriptionInput.value = ''
    nameInput.focus()
  }

  extractFilename(path) {
    if (path.substr(0, 12) === 'C:\\fakepath\\') return path.substr(12)
    let x
    x = path.lastIndexOf('/')
    if (x >= 0) return path.substr(x + 1)
    x = path.lastIndexOf('\\')
    if (x >= 0) return path.substr(x + 1)
    return path
  }

  render() {
    return (
      <Wrapper>
        <div className="formTitle" onClick={() => this.toggleCard()}>
          ADD YOUR PLANTS HERE
          <img
            className={this.state.showCard ? 'openIcon' : ''}
            src={addIconSrc}
            alt=""
          />
        </div>

        <Grid className={this.state.showCard ? 'visible' : 'hidden'}>
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
              <input
                type="file"
                name="file"
                className="inputfile"
                id="file"
                onChange={this.upload}
              />

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
        </Grid>
      </Wrapper>
    )
  }
}
