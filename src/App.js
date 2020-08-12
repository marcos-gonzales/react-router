import React, { useState, useEffect } from 'react'
import Main from './components/Main'
import Form from './components/Form'
import Note from './components/Note'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  const [notes, setNotes] = useState()

  useEffect(() => {
    console.log('use effect is in use')
    fetch('http://localhost:8080/getnotes')
      .then((result) => result.json())
      .then((fetchedNotes) => {
        setNotes(fetchedNotes)
      })
  }, [])

  if (!notes) return <h1>Loading...</h1>

  return (
    <Router>
      <div className='container'>
        <header>Notion</header>
        <section>
          <nav>
            <Link to='/form'>+</Link>
            {notes.map((note, index) => (
              <Link key={notes[index].id} to={note.slug}>
                {note.title}
              </Link>
            ))}
          </nav>
          {/* <Main
            title={notes[currentPage].title}
            content={notes[currentPage].content}
            id={notes[currentPage].id}
            slug={notes[currentPage].slug}
            completed={notes[currentPage].completed}
          /> */}
          <Switch>
            <Route path='/form'>
              <Form />
            </Route>
            <Route path='/'>
              <Note note={notes[0]} />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  )
}

export default App
