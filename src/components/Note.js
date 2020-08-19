import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Note = () => {
  const { pathname } = useLocation()
  const [note, setNote] = useState()

  console.log(pathname)

  useEffect(() => {
    fetch(`http://localhost:8080${pathname}`)
      .then((result) => result.json())
      .then((fetchedNote) => {
        setNote(fetchedNote[0])
        console.log(note)
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
