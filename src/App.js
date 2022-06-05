import React, { useState } from 'react';
import './bootstrap.min.css'
import 'bootstrap'
import Body from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      showAlert('dark mode has been enabled!', 'success')
      document.body.style.backgroundColor = 'black'
      document.title = 'TextUtils - Dark'
    } else {
      setMode('light')
      showAlert('dark mode has been disabled!', 'denger')
      document.title = 'TextUtils - Light'
      document.body.style.backgroundColor = 'white'

    }
  }
  return (
    <>

      <BrowserRouter>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Body showAlert={showAlert} mode={mode} />} />
          <Route exact path="/home" element={<Body showAlert={showAlert} mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
