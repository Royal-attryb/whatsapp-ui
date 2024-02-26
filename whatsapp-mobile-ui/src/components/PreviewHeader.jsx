import React from 'react'
import featuredIcon from '../images/featuredIcon.svg';
import cross from '../images/cross.svg';
import '../styles/PreviewHeader.css';
import OsToggle from './OsToggle';
import { useState } from 'react';
const PreviewHeader = ({onCancel, onToggle}) => {
  function handleCancel () {
    onCancel();
  }

  return (
    <div className='previewheader-container'>
        <div className='previewicon-container'>
            <img src={featuredIcon}></img>
        </div>
        <div className='previewcontent-container'>
            <p>Preview</p>
            {/* <OsToggle onToggle={onToggle} /> */}
              <div className='cross-container'> 
                <button onClick={handleCancel}>
                    <img className='cross' src={cross}></img>
                </button>  
              </div>
        </div>
    </div>
  )
}

export default PreviewHeader