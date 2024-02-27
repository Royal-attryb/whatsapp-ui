import React from 'react'
import Main from './mobileui/components/Main.jsx';
import '../styles/PreviewBody.css';

const PreviewBody = () => {
  return (
    <div className='previewbody-container'>
      <div className='previewbody-header'>
        <span className='approved'>Approved</span>
        <p className='template'>Template Name</p>
        <h1 className='event'>Valentines Day Sale</h1>
      </div>
      <div className='previewbody-content'>
        <Main />
      </div>
    </div>
  )
}

export default PreviewBody