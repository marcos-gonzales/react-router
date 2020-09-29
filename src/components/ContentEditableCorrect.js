import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const ContentEditable = () => {
  const [editable, setEditable] = useState({
    balloonContainer: false,
    ballonStringDisplay: false,
    balloonPrimary: false,
    active: false,
    placeholder: '',
    balloon: false,
    balloonString: false,
    newEditable: false,
    value: '',
    blue: false,
    test: false,
  })

  useEffect(() => {
    if (editable.test) {
      document.querySelector('.edit').focus()
      console.log('use effect is in use')
    }
  }, [editable.test])

  let instanceEditable = {
    newEditable: false,
  }

  const { pathname } = useLocation()

  const handleBlur = (e) => {
    setEditable({ ...editable, active: false, placeholder: '' })
  }

  const handleFocus = (e) => {
    const placeholder = editable.value ? '' : '/1337 commands'

    setEditable({
      ...editable,
      active: true,
      placeholder,
      value: e.target.textContent.trim(),
    })
  }

  const handleKeyPress = (e) => {
    console.log(e)

    const placeholder = editable.value ? '' : '/1337 commands'

    if (e.charCode === 13 && editable.value === '/balloon') {
      e.preventDefault()

      setEditable({
        ...editable,
        newEditable: true,
        balloonPrimary: true,
        balloonContainer: true,
        placeholder,
      })
    }

    if (e.charCode === 13 && editable.value === '/blue') {
      e.preventDefault()
      setEditable({
        ...editable,
        value: e.target.textContent.trim(),
        blue: true,
      })
    }

    if (e.charCode === 13 && !editable.value) {
      e.preventDefault()
      setEditable({
        newEditable: true,
      })
    }

    if (e.charCode === 13) {
      e.preventDefault()
      setEditable({
        newEditable: true,
        test: true,
      })
    }
  }

  const handleChange = (e) => {
    // CHECK FOR WHITE SPACE FROM EDITABLE.VALUE  // Check for new lines, spaces, return, and tabs.
    const placeholder = editable.value ? '' : '/1337 commands'

    setEditable({
      ...editable,
      value: e.target.textContent.trim(),
      placeholder,
    })
  }

  const DivContent = (e) => {
    const [instanceEditable, setInstanceEditable] = useState({
      balloonContainer: false,
      ballonStringDisplay: false,
      balloonPrimary: false,
      active: false,
      placeholder: '',
      balloon: false,
      balloonString: false,
      newEditable: false,
      value: '',
    })

    // useEffect(() => {}, [setInstanceEditable.value])

    const handleThisBlur = (e) => {
      const placeholder = instanceEditable.value ? '' : '/1337commands'

      setInstanceEditable({
        ...instanceEditable,
        active: false,
        placeholder,
        value: e.target.textContent.trim(),
      })
    }

    const handleThisFocus = (e) => {
      const placeholder = instanceEditable.value ? '' : '/1337 commands'

      setInstanceEditable({
        ...instanceEditable,
        active: true,
        placeholder,
      })
    }

    const handleThisKeyPress = (e) => {
      const placeholder = instanceEditable.value ? '' : '/1337 commands'

      setInstanceEditable({
        ...instanceEditable,
        value: e.target.textContent.trim(),
      })

      if (e.charCode === 13 && instanceEditable.value === '/balloon') {
        e.preventDefault()

        setInstanceEditable({
          ...instanceEditable,
          newEditable: true,
          balloonPrimary: true,
          balloonContainer: true,
          placeholder,
        })
      }

      if (e.charCode === 13 && instanceEditable.value === '/blue') {
        e.preventDefault()
        setInstanceEditable({
          ...instanceEditable,
          value: e.target.textContent.trim(),
          blue: true,
        })
      }

      if (e.charCode === 13 && !instanceEditable.value) {
        e.preventDefault()
        setInstanceEditable({
          ...instanceEditable,
          newEditable: true,
        })
      }

      if (e.charCode === 13) {
        e.preventDefault()
        setInstanceEditable({
          ...instanceEditable,
          newEditable: true,
        })
      }
    }

    const handleThisChange = (e) => {
      // CHECK FOR WHITE SPACE FROM EDITABLE.VALUE  // Check for new lines, spaces, return, and tabs.
      const placeholder = instanceEditable.value ? '' : '/1337 commands'
      setInstanceEditable({
        ...instanceEditable,
        value: e.target.textContent.trim(),
        placeholder,
      })
    }

    return (
      <div className={instanceEditable.balloonPrimary ? 'balloon-primary' : ''}>
        <div
          className={
            instanceEditable.balloonContainer
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
          className={
            instanceEditable.active ? 'editable active' : 'editable edit'
          }
          contentEditable='true'
          placeholder={instanceEditable.placeholder}
          style={{ width: '100%', padding: '3px 2px' }}
          onFocus={handleThisFocus}
          onInput={handleThisChange}
          onKeyPress={handleThisKeyPress}
          onBlur={handleThisBlur}
        ></div>
      </div>
    )
  }

  return (
    <div className={editable.balloonPrimary ? 'balloon-primary' : ''}>
      <div
        className={
          editable.balloonContainer
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
        className={editable.active ? 'editable active' : 'editable'}
        contentEditable='true'
        placeholder={editable.placeholder}
        style={{ width: '100%', padding: '3px 2px' }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleChange}
        onKeyPress={handleKeyPress}
      ></div>
      {editable.newEditable ? <DivContent /> : ''}
      {/* {instanceEditable.newEditable
        ? console.log('working')
        : console.log('not working')} */}
    </div>
  )
}

export default ContentEditable
