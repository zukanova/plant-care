import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import Card from '../components/Card'

import StyleBox from './StyleBox'

storiesOf('Card', module).add('default', () => (
  <React.Fragment>
    <Card>{text('Label', 'Hello world')}</Card>
  </React.Fragment>
))
