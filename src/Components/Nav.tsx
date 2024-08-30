import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-white w-full p-6">
      <Link to="/" className="font-bold">Notes</Link>
    </nav>
  )
}

export default Nav
