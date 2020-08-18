import React, { useState } from 'react'

const Form = ({ setNotes }) => {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [content, setContent] = useState('')
  const [errors, setErrors] = useState()

  const body = {
    slug: slug,
    title: title,
    content: content,
  }

  const submitPostForm = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/postnote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      redirect: 'follow',
    })
      .then((results) => {
        return results.json()
      })
      .then((notes) => {
        if (notes.slug) {
          console.log('this is results after json()', notes)
          setNotes(notes.slug)
        }
        console.log(notes)
        setErrors(notes.errors)
      })
      .catch((error) => console.log(error))
  }

  // const handleNoteChange = useCallback(
  //   (event) => {
  //     fetch('http://localhost:8080/getnotes')
  //       .then((results) => results.json())
  //       .then((fetchedNotes) => onNoteChange(fetchedNotes))
  //   },
  //   [onNoteChange]
  // )

  return (
    <div>
      <form id='form' className='form' style={{ color: 'red' }}>
        <label>
          title:
          <input
            placeholder='pet oswald...'
            type='text'
            name='title'
            value={title.value === 0 ? (title.style.color = 'red') : title}
            required={true}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <label>
          slug:
          <input
            placeholder='oswald...'
            type='text'
            name='slug'
            value={slug.value === 0 ? (slug.style.color = 'red') : slug}
            required={true}
            onChange={(e) => setSlug(e.target.value)}
          ></input>
        </label>
        <label>
          content:
          <textarea
            placeholder='pet oswald for 15 minutes daily...'
            name='content'
            required={true}
            onChange={(e) => setContent(e.target.value)}
            value={
              content.value === 0 ? (content.style.color = 'red') : content
            }
          ></textarea>
          <button onClick={submitPostForm}>submit</button>
        </label>
      </form>
      {!errors
        ? ''
        : errors.map((error) => (
            <ul>
              <li>{error.msg}</li>
              <li>{error.param}</li>
            </ul>
          ))}
    </div>
  )
}

export default Form
