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
  })

  const notionMethods = [
    {
      blue: function (e) {
        e.target.style.color = 'blue'
      },
      growFont: function (e) {
        e.target.style.fontSize = '22px'
      },
    },
  ]

  const { pathname } = useLocation()

  const handleBlur = (e) => {
    setEditable({ ...editable, active: false, placeholder: '' })
  }

  const handleFocus = (e) => {
    const placeholder = editable.value ? '' : '/1337 commands'
    if (editable.value.length === 0) {
      setEditable({
        ...editable,
        active: true,
        placeholder,
        value: e.target.textContent.trim(),
      })
    }
  }

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      console.log(e.currentTarget.nextSibling)
      // e.currentTarget.nextSibling.textContent = 'Hello'
      console.log(e.view)

      e.preventDefault()
      setEditable({
        ...editable,
        newEditable: true,
      })
    }
  }

  const handleChange = (e) => {
    const placeholder = editable.value ? '' : '/1337 commands'

    setEditable({
      ...editable,
      value: e.target.textContent.trim(),
      placeholder,
    })

    editable.value = e.target.textContent.trim()

    if (editable.value === '/blue') {
      notionMethods[0].blue(e)

      setEditable({
        ...editable,
        value: e.target.textContent.trim(),
        placeholder,
      })
    }

    if (editable.value === '/font') {
      notionMethods[0].growFont(e)

      setEditable({
        ...editable,
        value: e.target.textContent.trim(),
        placeholder,
      })
    }

    if (editable.value === '/balloon') {
      setEditable({
        ...editable,
        placeholder,
        balloonPrimary: true,
        balloonContainer: true,
      })
    }

    // if (editable.value !== '/balloon') {
    //   setEditable({
    //     ...editable,
    //     placeholder,
    //     balloonPrimary: false,
    //     balloonContainer: false,
    //   })
    // }
    // CHECK FOR WHITE SPACE FROM EDITABLE.VALUE  // Check for new lines, spaces, return, and tabs.
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

    useEffect(() => {}, [setInstanceEditable.value])

    const handleThisFocus = (e) => {
      const placeholder = instanceEditable.value ? '' : '/1337 commands'
      if (instanceEditable.value) {
        setInstanceEditable({
          ...instanceEditable,
          active: true,
          placeholder,
          // value: e.target.textContent.trim(),
        })
      }
    }

    const handleThisKeyPress = (e) => {
      if (e.charCode === 13) {
        e.preventDefault()
        setInstanceEditable({
          ...instanceEditable,
          newEditable: true,
        })
      }
    }

    const handleThisChange = (e) => {
      const placeholder = instanceEditable.value ? '' : '/1337 commands'
      console.log(e.target.textContent)

      setInstanceEditable({
        ...instanceEditable,
        value: e.target.textContent,
      })

      instanceEditable.value = e.target ? e.target.textContent.trim() : ''

      if (instanceEditable.value === '/blue') {
        notionMethods[0].blue(e)

        setInstanceEditable({
          ...instanceEditable,
          value: e.target.textContent.trim(),
          placeholder,
        })
      }

      if (instanceEditable.value === '/font') {
        notionMethods[0].growFont(e)

        setInstanceEditable({
          ...instanceEditable,
          value: e.target.textContent.trim(),
          placeholder,
        })
      }

      if (instanceEditable.value === '/balloon') {
        setInstanceEditable({
          ...instanceEditable,
          placeholder,
          balloonPrimary: true,
          balloonContainer: true,
        })
      }

      if (instanceEditable.value !== '/balloon') {
        setInstanceEditable({
          ...instanceEditable,
          placeholder,
          balloonPrimary: false,
          balloonContainer: false,
        })
      }
      // CHECK FOR WHITE SPACE FROM EDITABLE.VALUE  // Check for new lines, spaces, return, and tabs.
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
          className={instanceEditable.active ? 'editable active' : 'editable'}
          contentEditable='true'
          placeholder={instanceEditable.placeholder}
          style={{ width: '100%', padding: '3px 2px' }}
          onFocus={handleThisFocus}
          onInput={handleThisChange}
          onKeyPress={handleThisKeyPress}
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
      {/* {instanceEditable.newEditable ? <DivContent /> : ''} */}
    </div>
  )
}

export default ContentEditable
