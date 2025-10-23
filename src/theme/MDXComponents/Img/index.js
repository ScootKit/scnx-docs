import React from 'react';
import Img from '@theme-original/MDXComponents/Img';

export default function ImgWrapper(props) {
    console.log(props)
  return (
      <span className="testa"> <Img  {...props} /></span>
  );
}