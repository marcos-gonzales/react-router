import React, { useState, useEffect } from 'react'
// import Main from './components/Main'
import Form from './components/Form'
import Note from './components/Note'
import Sidebar from './components/Sidebar'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <header>Notion</header>
        <section>
          <Sidebar />
          <Switch>
            <Route path='/form'>{/* <Form setNotes={setNotes} /> */}</Route>
            <Route path='/slug/:slug'>
              <Note />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  )
}

export default App
