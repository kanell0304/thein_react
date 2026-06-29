import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Myapp from './Myapp'
import MyButton from './Mybutton'
import Header from './sementic/Header'
import Section from './sementic/Section'
import Footer from './sementic/Footer'
import Car1 from './sementic/Car1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Car1 color="redcolor" />
      <Car1 color="bluecolor" />
      <Car1 color="greencolor" />
      <Footer />
      {/* <Section /> */}
      {/* <Myapp />
      <MyButton /> */}
    </>
  )
}

export default App
