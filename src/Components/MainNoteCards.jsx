import React from 'react'
import { Link } from 'react-router-dom'

const MainNoteCards = ({ notes }) => {
  if (!notes) {
    return <>
      <div className="rounded shadow p-4 bg-white w-64 animate-pulse flex gap-2 flex-col">
        <div className="w-3/4 h-4 rounded-full bg-gray-200"></div>
        <div className="w-full h-2 rounded-full bg-gray-100"></div>
        <div className="w-1/2 h-2 rounded-full bg-gray-50"></div>
      </div>
      <div className="rounded shadow p-4 bg-white w-64 animate-pulse flex gap-2 flex-col">
        <div className="w-3/4 h-4 rounded-full bg-gray-200"></div>
        <div className="w-full h-2 rounded-full bg-gray-100"></div>
        <div className="w-1/2 h-2 rounded-full bg-gray-50"></div>
      </div>
      <div className="rounded shadow p-4 bg-white w-64 animate-pulse flex gap-2 flex-col">
        <div className="w-3/4 h-4 rounded-full bg-gray-200"></div>
        <div className="w-full h-2 rounded-full bg-gray-100"></div>
        <div className="w-1/2 h-2 rounded-full bg-gray-50"></div>
      </div>
    </>
  }

  return notes.map((note) => <Link to={`/${note._id}`} key={note._id} className="rounded shadow p-4 bg-white w-64">
      <h2 className="font-bold">{note.title}</h2>
      <p className="text-sm">{note.body.substring(0, 32)}</p>
      <small className="text-xs text-gray-300">{note.createdAt}</small>
    </Link>
  )
}

export default MainNoteCards
