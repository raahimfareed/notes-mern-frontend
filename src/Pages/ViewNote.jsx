import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import remarkGfm from "remark-gfm";
import Main from '../Layouts/Main';
import Markdown from 'react-markdown';

import "./Home.css";

const ViewNote = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchNote = async () => {
    const url = `http://localhost:4000/api/notes/${id}`;
    const response = await fetch(url);
    const json = await response.json();

    if (response.ok) {
      setNote(json);
    }
  }

  const deleteNote = async (e) => {
    e.preventDefault();
    const url = `http://localhost:4000/api/notes/${id}`;
    const response = await fetch(url, {
      method: "DELETE"
    });

    if (response.ok) {
      return navigate('/', { replace: true });
    }
  }

  useEffect(() => {
    fetchNote();
  }, []);

  if (!note) {
    return "Loading Note"
  }

  return (
    <Main>
      <div className="w-96 mx-auto mt-3">
        <div className="flex items-center gap-3">
          <Link className="rounded h-8 w-32 inline-flex items-center justify-center text-sky-100 bg-sky-600 transition-colors hover:bg-sky-700" to={`/${id}/edit`}>Edit</Link>
          <button onClick={deleteNote} className="rounded h-8 w-32 inline-flex items-center justify-center text-red-100 bg-red-600 transition-colors hover:bg-red-700">Delete</button>
        </div>
        <small className="text-gray-300">{note.createdAt}</small>
        <h2 className="text-2xl font-bold">{note.title}</h2>
        <Markdown className="markdown" remarkPlugins={[remarkGfm]}>
          {note.body}
        </Markdown>
      </div>
    </Main>
  )
}

export default ViewNote
