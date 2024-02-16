import React from 'react'
import '../styles/PreviewSlider.css';
import PreviewHeader from './PreviewHeader';
import PreviewBody from './PreviewBody';

const PreviewSlider = ({onCancel}) => {
  
  return (
    <div className='preview-container'>
        <PreviewHeader onCancel={onCancel}/>
        <PreviewBody />
    </div>
  )
}

export default PreviewSlider