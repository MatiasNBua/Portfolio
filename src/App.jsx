// import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container-app">
    <Header/>
    <Body/>
    <Footer/>
    </div>
  )
}

export default App
