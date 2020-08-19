import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [notes, setNotes] = useState()

  useEffect(() => {
    fetch('http://localhost:8080/getnotes')
      .then((result) => result.json())
      .then((fetchedNotes) => {
        setNotes(fetchedNotes)
      })
  }, [])

  return (
    <nav>
      <Link to='/form'>+</Link>
      {notes &&
        notes.map((note, index) => (
          <Link key={notes[index].id} to={`/slug/${note.slug}`}>
            {note.title}
            <input type='hidden' slug={note.slug} id={note.id}></input>
          </Link>
        ))}
    </nav>
  )
}

export default Sidebar
