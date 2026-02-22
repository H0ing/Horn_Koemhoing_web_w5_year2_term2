import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [search,setSearch] = useState("")
 const items = ["React","JavaScript","Tailwind"];
 
 const foundItem = items.filter(item =>{
    return item.toLowerCase().includes(search.toLowerCase())
 })
 

  return (
    <>
     <input type="text" placeholder='Search your items' value={search} onChange={e=>setSearch(e.target.value)} />
     <ul>
      {search != "" && foundItem.map((val,index) =>(<li key={index}>{val}</li>))}
     </ul>
    </>
  )
}

export default App