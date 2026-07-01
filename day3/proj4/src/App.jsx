import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './sementic/Header';
import Footer from './sementic/Footer';
import MyApp from './sementic/MyApp';
import MyApp2 from './sementic/MyApp2';
import MyApp3 from './sementic/MyApp3';
import MyUseReducer from './sementic/MyUseReducer';
import MyUseCallBack from './sementic/MyUseCallBack'
import WithoutMyUseMemo from './sementic/WithoutMyUseMemo'
import WithoutMyCustomHook from './sementic/WithoutMyCustomHook';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <MyApp3 />
      <MyApp2 />
      <MyApp /> */}
      {/* <MyUseReducer /> */}
      {/* <MyUseCallBack /> */}
      {/* <WithoutMyUseMemo /> */}
      <WithoutMyCustomHook />
      <Footer />
    </>
  )
}

export default App
