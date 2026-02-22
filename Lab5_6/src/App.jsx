import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [post, setPost] = useState([])
const [newContent,setNewContent] = useState("")
const handleAdd = ()=>{
  const item = {id:post.length,text:newContent}
  setPost(lastitem=>[...lastitem,item])
  setNewContent("")

}
  return (
    <>
      <input type="text" placeholder='Enter the content post' value={newContent} onChange={e=>setNewContent(e.target.value)}/>
      <button onClick={handleAdd}>Add item</button>
      <ul>
        {
          post.map(({id, text}, index)=><li key={index}>{id} : {text}</li>)
        }
      </ul>
    </>
  )
}

export default App