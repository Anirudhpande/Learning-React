import React, {useState} from 'react'

const App = () => {

  const [fruits, setfruits] = useState(["Mango", "Banana", "Orange"]);

  setfruits([...fruits, "Kiwi"])

  return (
    <div>
      {fruits.map((fruit, index)=>{
        return <h2 key = {index}>{fruit}</h2>
      })}
    </div>
  )
}

export default App