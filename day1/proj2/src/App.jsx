import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './sementic/Header'
import Footer from './sementic/Footer'
import Garage from './sementic/Garage'
import BasicExp from './sementic/BasicExp'
import Chapter08 from './sementic/Chapter08'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BasicExp />
      <Garage />
      <Chapter08 />
      <Footer />
    </>
  )
}

export default App
