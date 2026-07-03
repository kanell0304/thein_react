import { Link, Route, Routes } from 'react-router-dom';
import MyApp from './MyApp';
import Home from './Home';
import About from './About';
import ContactPage from './ContactPage';
import JoinPage from './page/JoinPage';
import LoginPage from './page/LoginPage';

function App() {

  return (
    <>
      <nav>
        <Link to="/Home" >Home </Link> |
        <Link to="/About" > About </Link> |
        <Link to="/ContactPage" > ContactPage </Link> |
        <Link to="/MyApp" > MyApp </Link> |
        <Link to="/LoginPage" > LoginPage </Link> |
        <Link to="/JoinPage" > JoinPage </Link> |
      </nav> 
      <hr />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/ContactPage' element={<ContactPage />} />
        <Route path='/MyApp' element={<MyApp />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/JoinPage' element={<JoinPage />} />
      </Routes>
    </>
  )
}

export default App
