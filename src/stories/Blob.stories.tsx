import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Readme from '../../README.md'
import Blob from '../components/blob/blob.component'
import { BlobInterface } from '../components/blob/blob.types'

import {
  DEFAULT_COLOR,
  DEFAULT_ELASTICITY,
  DEFAULT_FRICTION_COEFFICIENT,
  DEFAULT_INITIAL_POINT_ACCELERATION,
  DEFAULT_NUMBER_POINTS,
  DEFAULT_RADIAL_EFFECT,
  DEFAULT_RADIUS,
  DEFAULT_SENSITIVITY,
  DEFAULT_SPEED
} from '../components/blob/blob.config'

export default {
  title: 'Blob',
  component: Blob,
  parameters: {
    docs: {
      description: { component: Readme }
    }
  },
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
      description: 'Coefficient of friction',
      type: 'number'
    },
    elasticity: {
      name: 'elasticity',
      control: { type: 'range', min: 0, max: 0.002, step: 0.0001 },
      defaultValue: DEFAULT_ELASTICITY,
      description: 'Elasticity of the blob',
      type: 'number'
    },
    acceleration: {
      name: 'acceleration',
      control: { type: 'range', min: -10, max: 10, step: 0.5 },
      defaultValue: DEFAULT_INITIAL_POINT_ACCELERATION,
      description: 'The acceleration of each point',
      type: 'number'
    },
    radial: {
      name: 'radial',
      control: { type: 'range', min: -10, max: 10, step: 0.5 },
      defaultValue: DEFAULT_RADIAL_EFFECT,
      description: 'The radial effect constant',
      type: 'number'
    },
    points: {
      name: 'points',
      control: { type: 'range', min: 3, max: 300, step: 1 },
      defaultValue: DEFAULT_NUMBER_POINTS,
      description: 'The number of points used to construct the blob',
      type: 'number'
    },
    speed: {
      name: 'speed',
      control: { type: 'range', min: 1, max: 10, step: 0.25 },
      defaultValue: DEFAULT_SPEED,
      description: 'Speed of continuious point motion',
      type: 'number'
    },
    height: {
      name: 'height',
      control: { type: 'range', min: 1, max: window.innerHeight, step: 5 },
      defaultValue: window.innerHeight - 250,
      description: 'Canvas Height',
      type: 'number'
    },
    smoothing: {
      name: 'smoothing',
      control: 'boolean',
      defaultValue: true,
      description: 'Smoothing between points',
      type: 'boolean'
    },
    markers: {
      name: 'markers',
      control: 'boolean',
      defaultValue: false,
      description: 'Show markers at each point',
      type: 'boolean'
    },
    showMousePosition: {
      name: 'showMousePosition',
      control: 'boolean',
      defaultValue: false,
      description: 'Show the position of the mouse relative to the blob',
      type: 'boolean'
    }
  }
} as ComponentMeta<typeof Blob>
//  @ts-ignore
const Template: ComponentStory<typeof Blob> = (args: BlobInterface) => (
  // @ts-ignore
  <Blob {...args} />
)

export const blob = Template.bind({})
