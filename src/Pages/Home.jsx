import React, { useEffect, useState } from 'react';
import MainNoteCards from '../Components/MainNoteCards';
import Main from '../Layouts/Main';
import { Link } from 'react-router-dom';

const Home = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const url = "http://localhost:4000/api/notes";
      const response = await fetch(url);
      const json = await response.json();

      if (response.ok) {
        setNotes(json);
        console.log(json);
      }
    }

    fetchNotes();
  }, []);

  return (
    <Main>
      <div className="flex justify-center gap-3 mt-3">
        <div className="w-96 flex flex-wrap items-stretch justify-content gap-3 p-3">
          <Link to="/create" className="rounded h-8 w-32 inline-flex items-center justify-center text-sky-100 bg-sky-600 transition-colors hover:bg-sky-700">Add</Link>
          <MainNoteCards notes={notes} />
        </div>
      </div>
    </Main>
  )
}

export default Home
