import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Header from './sementic/Header';
import Footer from './sementic/Footer';
import MyUserState from './sementic/MyUseState';
import MyApp from './sementic/MyApp';
import Board from './sementic/tictacto/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <hr />
      {/* <MyUserState /> */}
      {/* <MyApp /> */}
      <Board />
      <hr />
      <Footer />
    </div>
  )
}

export default App
