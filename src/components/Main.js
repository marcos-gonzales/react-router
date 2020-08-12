import React from 'react'

const Main = ({ title, content, id, slug, completed }) => {
  const deleteNote = (e) => {
    e.preventDefault()

    const body = {
      id: id,
    }

    fetch('http://localhost:8080/deletenote', {
      method: 'DELETE',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((note) => console.log(note))
  }

  const checkbox = (e) => {
    e.preventDefault()
    if (completed === 0) {
      const body = {
        id: id,
        completed: 1,
        title: title,
        content: content,
        slug: slug,
      }

      fetch('http://localhost:8080/updatenote', {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    if (completed === 1) {
      const body = {
        id: id,
        completed: 0,
        title: title,
        content: content,
        slug: slug,
      }

      fetch('http://localhost:8080/updatenote', {
        body: JSON.stringify(body),
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  }

  return (
    <main>
      <h1 className='main'>{title}</h1>
      <p className='main'>{content}</p>
      <form action='http://localhost:8080/postnote'>
        <label>
          Completed?
          <input
            type='checkbox'
            onClick={checkbox}
            checked={completed === 1 ? '{true}' : ''}
          ></input>
        </label>
      </form>

      <form action='http://localhost:8080/deletenote'>
        <input type='hidden' name={id}></input>
        <button onClick={deleteNote}>Delete</button>
      </form>
    </main>
  )
}

export default Main
