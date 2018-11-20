import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import StyleBox from './StyleBox'

import Card from '../components/Card'
import Need from '../components/Need'

storiesOf('Card', module).add('default', () => (
  <React.Fragment>
    <Card>{text('Label', 'Hello world')}</Card>
  </React.Fragment>
))

storiesOf('Need', module).add('default', () => (
  <React.Fragment>
    <Need>{text('Label', 'Hello world')}</Need>
  </React.Fragment>
))
