import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Blob from '../components/blob/blob.component'
import { BlobInterface } from '../components/blob/blob.types'
import {
  DEFAULT_COLOR,
  DEFAULT_FRICTION_COEFFICIENT,
  DEFAULT_NUMBER_POINTS,
  DEFAULT_RADIUS,
  DEFAULT_SENSITIVITY,
  DEFAULT_SPEED
} from '../components/blob/blob.config'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Blob',
  component: Blob,
  parameters: {
    docs: {
      description: { component: 'React Blob Component' }
    }
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      name: 'color',
      control: 'color',
      defaultValue: DEFAULT_COLOR,
      description: 'Color of the blob component',
      type: 'string'
    },
    radius: {
      name: 'radius',
      control: { type: 'range', min: 1, max: window.innerWidth / 4, step: 10 },
      defaultValue: DEFAULT_RADIUS,
      description: 'Radius of the blob component',
      type: 'number'
    },
    sensitivity: {
      name: 'sensitivity',
      control: { type: 'range', min: 0.1, max: 10, step: 0.1 },
      defaultValue: DEFAULT_SENSITIVITY,
      description: 'Sensitivity of the blob component to mouse jitter',
      type: 'number'
    },
    friction: {
      name: 'friction',
      control: { type: 'range', min: 0, max: 0.9, step: 0.0001 },
      defaultValue: DEFAULT_FRICTION_COEFFICIENT,
      description: 'Sensitivity of the blob component to mouse jitter',
      type: 'number'
    },
    points: {
      name: 'points',
      control: { type: 'range', min: 3, max: 300, step: 1 },
      defaultValue: DEFAULT_NUMBER_POINTS,
      description: 'the number of points used to construct the blob',
      type: 'number'
    },
    speed: {
      name: 'speed',
      control: { type: 'range', min: 1, max: 10, step: 0.25 },
      defaultValue: DEFAULT_SPEED,
      description: 'speed of continuious point motion',
      type: 'number'
    },
    smoothing: {
      name: 'smoothing',
      control: 'boolean',
      defaultValue: true,
      description: 'smoothing between points',
      type: 'boolean'
    },
    markers: {
      name: 'markers',
      control: 'boolean',
      defaultValue: false,
      description: 'show markers at each point',
      type: 'boolean'
    },
    showMousePosition: {
      name: 'showMousePosition',
      control: 'boolean',
      defaultValue: false,
      description: 'show the position of the mouse relative to the blob',
      type: 'boolean'
    }
  }
} as ComponentMeta<typeof Blob>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Blob> = (args: BlobInterface) => (
  <Blob {...args} />
)

export const Example = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {}
