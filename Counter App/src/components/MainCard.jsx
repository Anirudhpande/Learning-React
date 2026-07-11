import React from 'react'

const MainCard = (props) => {


  return (
    <div className='mx-185 my-10 h-100 w-100 bg-amber-500 rounded-4xl flex justify-center items-center'>
        <h2 className="text-9xl">{props.num}</h2>
    </div>
  )
}

export default MainCard