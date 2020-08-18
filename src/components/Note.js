import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Note = ({ note, setNotes }) => {
  const { pathname } = useLocation()
  let correctNote

  useEffect(() => {
    fetch(`http://localhost:8080/slug/${note.slug}`)
      .then((result) => result.json())
      .then((fetchedNotes) => {
        setNotes(fetchedNotes)
        console.log(note)
      })
  }, [pathname])

  note.forEach((singleNote) => {
    if ('/slug/' + singleNote.slug === pathname) {
      correctNote = singleNote
    }
  })

  return (
    <div>
      <h1>path:{pathname}</h1>
      <p>{correctNote.title}</p>
      <p>{correctNote.content}</p>
      <input type='hidden' id={correctNote.id} slug={correctNote.slug}></input>
    </div>
  )
}

export default Note
