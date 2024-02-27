import React from 'react';
import Mobile from './Mobile.jsx';
import { template, os } from '../constants.js';

const Main = () => {
    const temp = template;

  return (
    <>
        <Mobile os={os.ios} template={temp} />
    </>
  )
}

export default Main