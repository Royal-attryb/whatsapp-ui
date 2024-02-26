import React from 'react'
import Main from '../components/Main.jsx';
import PreviewSlider from '../components/PreviewSlider.jsx';
import './Preview.css';
import { useState } from 'react';

const Preview = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  function handleSidebarVisibility () {
    setSidebarVisibility(!isSidebarVisible);    
  }

  function handleCancel () {
    setSidebarVisibility(false);
  }

  function handleKeyDown(key) {
    // console.log(key);
    if (key.key === 'Escape')
      setSidebarVisibility(false);
  }

  function handleOutsideClick () {
    setSidebarVisibility(false);
  }

  return (
    <div onKeyDown={handleKeyDown} className={`previewpage-container ${isSidebarVisible && "opaque"}`}>
        <button onClick={handleSidebarVisibility}>Hide/Show</button>       
        <div onClick={handleOutsideClick} className='empty
        '></div> 
          {
              <div onClick= {() => {!isSidebarVisible && setSidebarVisibility(true)}} className={`previewslider-container ${!isSidebarVisible && "hidesidebar"}`}>
                <PreviewSlider onCancel={handleCancel} />
              </div>
          }
    </div>
  )
}

export default Preview