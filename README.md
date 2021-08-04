# Feather icons React Typescript

<span align="center">
  <img src="assets/preview.png" alt="atlantum logo" />

[![npm](https://img.shields.io/npm/v/@ailibs/feather-react-ts.svg?maxAge=2592000)](https://www.npmjs.com/package/@atlantum/feather-react-ts)
[![NPM downloads](https://img.shields.io/npm/dm/@ailibs/feather-react-ts.svg?)](https://www.npmjs.com/package/@atlantum/feather-react-ts.svg?)

</span>

<p>Nice set of icons as React components with type checking and auto complete.</p>

<hr/>

👉 <a href='https://feather-icons-react-typescript.vercel.app/?path=/story/introduction--introduction'>Link to storybook preview</a>

### Installation

```bash
yarn add @ailibs/feather-react-ts

or

npm install @ailibs/feather-react-ts
```

### Usage

```jsx
import React from 'react'
import Icon from '@ailibs/feather-react-ts'

// Basic render with default parameters
// color=black / size=24px / stroke-width=2
<Icon name='activity' />


// Customize look by passing values in to props
<Icon name='activity' size='32' stroke='4' color='black' />

// Values for size and stroke can be string | number
<Icon name='activity' size={32} stroke={4}color='black' />

// Support for adding classes via className prop
<Icon name='activity' className="my-awesome-class" />

// Support onClick event via props
<Icon name='activity' onClick={() => console.log("Clicked!")} />
```

### Enjoy!
