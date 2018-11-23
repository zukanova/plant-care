import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import StyleBox from './StyleBox'

import Card from '../components/Card'
import Light from '../components/Light'
import Water from '../components/Water'

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

storiesOf('Needs', module).add('Needs', () => (
  <React.Fragment>
    <Light text={text('Label', 'Light')} icon={3} />
    <StyleBox h={20} />
    <Water text={text('Label2', 'Water')} icon={2} />
  </React.Fragment>
))
