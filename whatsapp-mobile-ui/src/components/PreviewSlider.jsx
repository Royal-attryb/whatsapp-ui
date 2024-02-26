import React from 'react'
import '../styles/PreviewSlider.css';
import PreviewHeader from './PreviewHeader';
import PreviewBody from './PreviewBody';
import { useState } from 'react';

const PreviewSlider = ({onCancel}) => {

  const [os, setOs] = useState("ios");
  function handleToggle(event) {
    const os = event.target.checked ? "android" : "ios";
    setOs(os);
  }

  return (
    <div className='preview-container'>
        <PreviewHeader onCancel={onCancel} onToggle={handleToggle}/>
        <PreviewBody />
    </div>
  )
}

export default PreviewSlider