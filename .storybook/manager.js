import { create } from '@storybook/theming'

const theme = create({
  base: 'light',
  brandTitle: 'react-interactive-blob',
  brandUrl: 'https://github.com/SammyRobensParadise/react-interactive-blob',
  brandImage:
    'https://user-images.githubusercontent.com/33642354/180630734-a221d4d8-81d9-4b28-a2e7-f7ea64875644.png'
})

import { addons } from '@storybook/addons'

addons.setConfig({
  theme: theme
})
