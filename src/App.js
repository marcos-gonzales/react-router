import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Note from './components/Note'
import Sidebar from './components/Sidebar'
import ContentEditable from './components/ContentEditable'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = (e) => {
  function testingOne() {
    return <h1>Welcome testing one</h1>
  }

  function testingTwo() {
    return <h1>Welcome testing two</h1>
  }

  return (
    <Router>
      <div className='container'>
        <header>Notion</header>
        <section>
          <Sidebar />
          <Switch>
            <Route path='/form'>
              <Form />
            </Route>
            <Route path='/slug/:slug'>
              <div>
                <Note />
                <ContentEditable />
              </div>
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  )
}

export default App
