# React-Interactive Blob

React Interactive Blob is an interactive and customizable blob component for react applications. It is built in TypeScript. It can be used just like any other React `JSX` Component.

- ✅ Dependency-Free
- ✅ TypeScript Supported
- ✅ Simple API
- ✅ No Physics knowledge required

---

- [Getting Started](#getting-started)
- [API](#API)
- [Interactive Example](#interactive-example)

## Getting Started

### Install `react-interactive-blob`

```bash

npm install react-interactive-blob

```

```bash

yarn add react-interactive-blob

```

### Add to your project

```tsx
import { Blob } from 'react-interactive-blob'

function MyComponent() {
  return <Blob height={500} radius={150} />
}
```

## API

| Name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `color` | Color of the blob component. Right now only solid colors are supported | string | `"#2f4acf"` |
| `radius` | The outer canvas pixel radius of the blob at still position | number | 128 |
| `sensitivity` | Sensitivity of the blob component to mouse jitter | number | 0.5 |
| `friction` | The coefficient of friction for blob movement. | number | 0.0095 |
| `elasticity` | Elasticity coefficient of the blob point connections | number | 0.001 |
| `acceleration` | The acceleration of each point making up the blob | number | `- 1 + Math . random () * 0.1` |
| `radial` | The radial effect of each point making up the blob | number | 0.1 |
| `points` | The number of points used to construct the shape. Note that there must be at least three points | number | 32 |
| `speed` | The speed of continuous point motion | number | 0.5 |
| `height` | The height of the container canvas element | number | `window.innerHeight ` |
| `smoothing` | Whether a quadratic curve should be constructed between points | boolean | `true` |
| `markers` | Whether to show square markers at each point vertex | boolean | `false` |
| `showMousePosition` | Whether to show the position of the mouse relative to the blob | boolean | `false` |

## Interactive Example

[View Interactive Example](https://sammyrobensparadise.github.io/react-interactive-blob/?path=/story/blob--blob)
