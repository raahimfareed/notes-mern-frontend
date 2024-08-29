import React, { useState } from 'react'
import Main from '../Layouts/Main';
import { useNavigate } from 'react-router-dom';

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const addNote = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:4000/api/notes`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, body })
    });

    const json = await response.json();

    if (response.ok) {
      // setNotes([...notes, json]);
      navigate("/", { replace: true });
    }
  }

  return (
    <Main>
      <div className="container mx-auto mt-3">
        <h1 className="text-2xl">Create Note</h1>
        <form onSubmit={addNote}>
          <div className="mb-3">
            <label htmlFor="title">Title</label>
            <input 
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded bg-white p-2 w-full border-2" />
          </div>
          <div className="mb-3">
            <label htmlFor="body">Body</label>
            <textarea 
              id="body"
              name="body"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className="rounded bg-white p-2 w-full min-h-[50vh] border-2"></textarea>
          </div>
          <div className="mb-3">
            <button className="rounded h-8 w-32 inline-flex items-center justify-center text-sky-100 bg-sky-600 transition-colors hover:bg-sky-700">Add</button>
          </div>
        </form>
      </div>
    </Main>
  )
}

export default CreateNote
