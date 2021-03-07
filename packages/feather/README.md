# Feather icons React Typescript

<p>Nice set of icons as React components with type checking and auto complete.</p>

<hr/>

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

made with ❤️ by Arthur Ivanov.
