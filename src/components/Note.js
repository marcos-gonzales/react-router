import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Note.css'

const Note = () => {
  const { pathname } = useLocation()
  const [note, setNote] = useState()

  useEffect(() => {
    fetch(`http://localhost:8080${pathname}`)
      .then((result) => result.json())
      .then((fetchedNote) => {
        setNote(fetchedNote[0])
      })
  }, [pathname])

  if (!note) return <p>no note!</p>

  return (
    <div>
      <h1>path:{pathname}</h1>
      <p>{note.title}</p>
      <p>{note.content}</p>
      <input type='hidden' id={note.id} slug={note.slug}></input>
    </div>
  )
}

export default Note
