import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import StyleBox from './StyleBox'

import Card from '../components/Card'
import IconRange from '../components/IconRange'
import Form from '../components/Form'
import Navigation from '../components/Navigation'

storiesOf('Card', module).add('card', () => (
  <React.Fragment>
    <Card
      title={text('Card: text', 'Monstera')}
      subtitle={text('Card: text', 'Monstera deliciosa')}
      light={3}
      water={2}
    />
  </React.Fragment>
))

storiesOf('IconRange', module).add('IconRange', () => (
  <React.Fragment>
    <IconRange text={text('Label', 'Water')} icon={3} />
  </React.Fragment>
))

storiesOf('FormEl', module).add('form', () => (
  <React.Fragment>
    <Form />
  </React.Fragment>
))

storiesOf('Navigation', module).add('IconRange', () => (
  <React.Fragment>
    <NavLink />
  </React.Fragment>
))
