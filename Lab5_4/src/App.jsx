import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const PostAction = ({onLike,onShare})=>{
  return(
    <div>
       <button onClick={onLike}>Like</button>
       <button onClick={onShare}>Share</button>
    </div>
  )
}
function App() {
  const handleLike = () =>{
    console.log("Post liked!");
    alert("You liked this post!");
  }
  const handleShare =()=>{
    console.log("Post shared!");
    alert("You shared this post!");
  }


  return (
    <>
      <PostAction onLike={handleLike} onShare={handleShare} />
    </>
  )
}

export default App