import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react-dom'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './Home';
import Four from './Four'
import SignUp from './SignUp'
import Login from './Login'
import Layout from './Layout';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/menu' element={<Four />}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>





  );
}

export default App;
