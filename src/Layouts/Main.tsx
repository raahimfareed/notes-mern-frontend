import React from 'react'
import Nav from "../Components/Nav";

const Main = ({ children }) => {
  return (
    <>
      <Nav />
      <main>
        {children}
      </main>
    </>
  )
}

export default Main
