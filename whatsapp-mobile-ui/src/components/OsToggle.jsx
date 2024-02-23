import React from 'react'
import '../styles/OsToggle.css';

const OsToggle = ({onToggle}) => {
  return (
    <div className='toggle'>
        <div className='toggle__container'>
            <input onChange={onToggle}className="toggle__input" type="checkbox" />
        </div>
    </div>
  )
}

export default OsToggle