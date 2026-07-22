import React from 'react'
import Navbar from './components/Navbar'
import CreateCard from './components/CreateCard'
import { useState } from 'react'

const App = () => {

   const [notes, setNotes] = useState([])


  
  return (
    <div>
      <Navbar />
      <CreateCard setNotes={setNotes}/>
    </div>
  )
}

export default App