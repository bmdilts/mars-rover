import React from 'react';

export default ({images}) =>
  <ul>
    {images.slice(0,1).map((image, index) =>
      <li key={index}> <img className='img' src={image.img_src}/> </li>
    )}
  </ul>
