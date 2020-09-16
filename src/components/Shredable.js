import React, { useState } from 'react'

const ShredableContent = (e) => {
  const [shredable, setShredable] = useState({
    balloonContainer: false,
    ballonStringDisplay: false,
    balloonPrimary: false,
    active: false,
    placeholder: '',
    balloon: false,
    balloonString: false,
    newEditable: false,
  })
  return (
    <div className={shredable.balloonPrimary ? 'balloon-primary' : ''}>
      <div
        className={
          shredable.balloonContainer
            ? 'balloon-container'
            : 'balloon-container-none'
        }
      >
        <div className='balloon'></div>

        <div className='balloon-string-display'>
          <p className='balloon-string'>|</p>
          <p className='balloon-string'>|</p>
          <p className='balloon-string'>|</p>
          <p className='balloon-string'>|</p>
          <p className='balloon-string'>|</p>
        </div>
      </div>
      <div
        className={shredable.active ? 'editable active' : 'editable'}
        contentEditable='true'
        placeholder={shredable.placeholder}
        style={{ width: '100%', padding: '3px 2px' }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleChange}
        onKeyPress={handleKeyPress}
      ></div>
      {shredable.newEditable
        ? console.log('its editable!')
        : console.log('its not editable!')}
    </div>
  )
}
export default ShredableContent
