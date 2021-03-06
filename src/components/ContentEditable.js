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

  const [instanceEditable, setInstanceEditable] = useState({
    newEditable: false,
    test: false,
  })

  const divCont = useRef(null)

  useEffect(() => {
    if (editable.value) {
      setEditable({
        ...editable,
        placeholder: '',
      })
    }

    if (editable.test) {
      setTimeout(function () {
        divCont.current.focus()
        console.log(divCont.current.focus())
        console.log('this is working')
      }, 200)
      setEditable({
        ...editable,
        test: false,
      })
    }
    if (instanceEditable.test) {
      setTimeout(function () {
        divCont.current.focus()
        console.log(divCont.current.focus())
      }, 200)
    }
  }, [editable.test, instanceEditable.test, editable.value])

  const handleChange = (e) => {
    // CHECK FOR WHITE SPACE FROM EDITABLE.VALUE  // Check for new lines, spaces, return, and tabs.
    // const placeholder = editable.value ? '' : '/1337 commands'

    setEditable({
      ...editable,
      value: e.target.textContent.trim(),
      // placeholder,
    })
  }

  const handleKeyPress = (e) => {
    // const placeholder = editable.value ? '' : '/1337 commands'

    if (e.charCode === 13 && editable.value === '/balloon') {
      e.preventDefault()

      setEditable({
        ...editable,
        // placeholder,
        balloonPrimary: true,
        balloonContainer: true,
        newEditable: true,
      })
      return
    }

    if (e.charCode === 13) {
      e.preventDefault()

      setEditable({
        ...editable,
        test: true,
        newEditable: true,
        // placeholder,
      })
      return
    }

    if (e.charCode === 13 && editable.value === '/blue') {
      e.preventDefault()

      setEditable({
        ...editable,
        // placeholder,
        // value: e.target.textContent.trim(),
        blue: true,
      })
    }

    if (e.charCode === 13 && !editable.value) {
      e.preventDefault()

      setEditable({
        ...editable,
        newEditable: true,
        // placeholder,
        test: true,
        // value: e.target.textContent.trim(),
      })
    }
  }

  const handleBlur = (e) => {
    setEditable({ ...editable, active: false, placeholder: '' })
  }

  const handleFocus = (e) => {
    const placeholder = editable.value ? '' : '/1337 commands'

    setEditable({
      ...editable,
      placeholder,
      active: true,
      value: e.target.textContent.trim(),
    })
  }

  const DivContent = (e) => {
    const [divEditable, setDivEditable] = useState({
      balloonContainer: false,
      ballonStringDisplay: false,
      balloonPrimary: false,
      active: false,
      placeholder: '',
      balloon: false,
      balloonString: false,
      value: '',
      newEditable: false,
      test: false,
    })

    useEffect(() => {
      if (divEditable.value) {
        setDivEditable({
          ...divEditable,
          placeholder: '',
        })
      } else {
        setDivEditable({
          ...divEditable,
          placeholder: '/1337 commands',
        })
      }
    }, [divEditable.value])

    const handleThisBlur = (e) => {
      setDivEditable({
        ...divEditable,
        active: false,
        placeholder: '',
      })
    }

    const handleThisFocus = (e) => {
      const placeholder = divEditable.value ? '' : '/1337 commands'

      setDivEditable({
        ...divEditable,
        active: true,
        placeholder,
        newEditable: false,
      })
    }

    const handleThisKeyPress = (e) => {
      const placeholder = divEditable.value ? '' : '/1337 commands'

      setDivEditable({
        ...divEditable,
      })
      if (e.charCode === 13 && divEditable.value === '/balloon') {
        e.preventDefault()

        setDivEditable({
          ...divEditable,
          placeholder,
          newEditable: true,
          balloonPrimary: true,
          balloonContainer: true,
        })
        return
      }
      if (e.charCode === 13 && divEditable.value === '/blue') {
        e.preventDefault()

        setDivEditable({
          ...divEditable,
          blue: true,
        })
        return
      }
      if (e.charCode === 13 && !divEditable.value) {
        e.preventDefault()

        setDivEditable({
          ...divEditable,
          newEditable: true,
        })
        return
      }
      if (e.charCode === 13) {
        e.preventDefault()

        setDivEditable({
          ...divEditable,
          newEditable: true,
        })

        setInstanceEditable({
          ...instanceEditable,
          newEditable: true,
          test: true,
        })

        if (instanceEditable.test === true) {
          setInstanceEditable({
            ...instanceEditable,
            test: false,
          })
        }

        return
      }
    }

    const handleThisChange = (e) => {
      // CHECK FOR WHITE SPACE FROM EDITABLE.VALUE  // Check for new lines, spaces, return, and tabs.
      const placeholder = divEditable.value ? '' : '/1337 commands'

      setDivEditable({
        ...divEditable,
        value: e.target.textContent.trim(),
        placeholder,
      })
    }

    return (
      <div className={divEditable.balloonPrimary ? 'balloon-primary' : ''}>
        <div
          className={
            divEditable.balloonContainer
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
          tabIndex='0'
          className={divEditable.active ? 'editable active' : 'editable edit'}
          contentEditable='true'
          placeholder={divEditable.placeholder}
          style={{ width: '100%', padding: '3px 2px' }}
          onFocus={handleThisFocus}
          onInput={handleThisChange}
          onKeyPress={handleThisKeyPress}
          onBlur={handleThisBlur}
          ref={divCont}
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
        tabIndex='0'
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
      {instanceEditable.newEditable ? <DivContent /> : ''}
    </div>
  )
}

export default ContentEditable
