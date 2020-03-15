//in Button.story.js

import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
    .add('default', () => (
        <Button>Submit</Button>
    ))