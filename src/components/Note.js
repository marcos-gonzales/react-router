import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Note = ({ note }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    console.log('use effect is in use')
    fetch('http://localhost:8080/slug/{slug}')
      .then((result) => result.json())
      .then((fetchedNotes) => {
        setNotes(fetchedNotes)
      })
  }, [pathname])

  return (
    <div>
      <h1>path:{pathname}</h1>
      <p>{note.title}</p>
      <p>{note.content}</p>
    </div>
  )
}

export default Note
