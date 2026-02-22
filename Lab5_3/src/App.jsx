import { useState } from 'react'
import './App.css'
import ImgReact from './assets/react.svg'


const PostImage = ({url}) => {
  return url!=null? <div className='img-wrapper'>Have Img</div>:<div style={{backgroundColor:"gray", width:"100px", height:"20px"}}>No Image</div>
}


function App() {
  

  return (
    <>
      <PostImage url={ImgReact}/>
      <PostImage />
    </>
  )
}

export default App
