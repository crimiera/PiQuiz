import { useState } from 'react'
import './App.css'
import {Quiz, Button} from './Components';


function App() {
  const [start, setStart] = useState(false)

  return (
    <div className="App">
      <h1>Welcome to PI Quiz</h1>
      {start ? <Quiz/>: <Button text={'Start Game'} handleClick={() => setStart(true)}/> }
    </div>
  )
}

export default App
