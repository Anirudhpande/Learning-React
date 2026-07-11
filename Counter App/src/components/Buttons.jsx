import React from 'react'

const Buttons = ({increaseCount, decreaseCount}) => {
  return (
    <div className='bg-blue-400 h-40 rounded-4xl flex flex-row items-center justify-around'>
        <button onClick={increaseCount} className='bg-amber-100 h-10 w-20 rounded-4xl'>Increase</button>
        <button onClick={decreaseCount} className='bg-amber-100 h-10 w-20 rounded-4xl'>Decrease</button>
    </div>
  )
}

export default Buttons