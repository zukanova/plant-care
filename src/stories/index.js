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
    <Card>{text('Label', 'Hello world')}</Card>
  </React.Fragment>
))

storiesOf('Needs', module).add('Needs', () => (
  <React.Fragment>
    <Light text={text('Label', 'Licht')} />
    <StyleBox h={40} />
    <Water>text={text('Label2', 'Water')}</Water>
  </React.Fragment>
))
