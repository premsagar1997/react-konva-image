# react-konva-image - useKonvaImage custom React Hook

A custom React Hook for loading react konva image.

## Installation

```bash
npm install react-konva-image
```

## Importing
```js
import useKonvaImage from 'react-konva-image';
```


## Usage
```js

import React from 'react';
import { Image } from 'react-konva';
import useKonvaImage from 'react-konva-image';

const imgUrl = 'https://konvajs.org/assets/lion.png';

//Pass image url as first argument to useKonvaImage hook
//It will return image DOM image element
export default App = () => {
  const [image] = useKonvaImage(imgUrl);

  return <Image image={image} />;
};

//Pass image url as 1st argument & crossOrigin as 2nd argument to useKonvaImage hook
//It will return image DOM image element & status
//Status can be 'laoding', 'loaded', or 'failed'
export default App = () => {
  const [image, status] = useKonvaImage(imgUrl, 'Anonymous');

  return <Image image={image} />;
};

```
