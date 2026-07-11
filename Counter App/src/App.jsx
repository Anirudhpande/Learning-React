import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MainCard from './components/MainCard'
import Buttons from './components/Buttons'

const App = () => {

  const [num, setnum] = useState(0)

  function increaseCount(){
    setnum(prev=> prev+1)
    console.log("button clicked")
  }

  function decreaseCount(){
    setnum(prev=>prev-1)
    console.log("button clicked")
  }

  function reset(){
    setnum(prev=>0)
  }

  
  return (
    <div className='p-4 bg-amber-100 h-screen w-full'>
      <Navbar />
      <MainCard num={num}/>
      <Buttons decreaseCount={decreaseCount}
               increaseCount={increaseCount}
               reset={reset}/>
    </div>
  )
}

export default App
