//in .storybook/config.js

import { configure } from '@storybook/react'

configure(function () {
    require('../src/stories/Button.stories')
}, module)
