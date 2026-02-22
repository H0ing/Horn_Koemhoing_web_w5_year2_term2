import { useState } from 'react'

import './App.css'

const Layout = ({children}) => {
  return (
    <div>
      <nav>Navbar</nav>
      {children} 
      <footer>Footer</footer>
    </div>
  );
}

function App() {
  

  return (
    <Layout>
      <h1>Children1</h1>
      <h1>Children2</h1>
    </Layout>
  )
}

export default App
