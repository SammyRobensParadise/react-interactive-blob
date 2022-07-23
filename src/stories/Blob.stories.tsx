import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Blob from '../components/blob/blob.component'
import { BlobInterface } from '../components/blob/blob.types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Blob',
  component: Blob,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      name: 'color',
      control: 'color',
      defaultValue: '#2f4acf',
      description: 'Color of the blob component',
      type: 'string'
    },
    radius: {
      name: 'radius',
      control: { type: 'range', min: 1, max: window.innerWidth / 4, step: 10 },
      defaultValue: 128,
      description: 'Radius of the blob component',
      type: 'number'
    },
    sensitivity: {
      name: 'sensitivity',
      control: { type: 'range', min: 0.1, max: 10, step: 0.1 },
      defaultValue: 0.5,
      description: 'Sensitivity of the blob component to mouse jitter',
      type: 'number'
    },
    points: {
      name: 'points',
      control: { type: 'range', min: 3, max: 300, step: 1 },
      defaultValue: 32,
      description: 'the number of points used to construct the blob',
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
