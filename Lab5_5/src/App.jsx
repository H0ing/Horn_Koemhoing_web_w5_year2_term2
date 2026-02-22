import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const DeleteBtn = ({id,onConfirm}) => {
  return(
    <>
      <button onClick={() =>onConfirm(id) }>Delete</button>
    </>
  )
}


function App() {
const handleConfirm = (id) => {
  console.log(`Deleted comfirmed for ID:${id}`)
  alert(`You are deleting item  with ID:${id}`)
}
  return (
    <>
     <DeleteBtn id={1} onConfirm={handleConfirm}/>
     <DeleteBtn id={2} onConfirm={handleConfirm} />
     <DeleteBtn id={3} onConfirm={handleConfirm} />
    </>
  )
}

export default App