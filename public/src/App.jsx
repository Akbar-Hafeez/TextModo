import React,{useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'
import About from './components/About'
import {
  BrowserRouter as Router,
 Routes,
  Route,
  } from "react-router-dom";
 
function App() {
  const [alert,setAlert] = useState(null)
  const showAlert=(type,message)=>{
setAlert({
type:type,
msg:message
})
setTimeout(() => {
  setAlert(null)
}, 1400);
  }
  return (
    <>
  
        <Router>
  <Navbar title="TextModo" showAlert={showAlert} />
  <Alert alert={alert} />
  <Routes>
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/" element={<div className='container'><Textform title="Try TextModo ! Text Converter ,Word Counter ,Text Counter" showAlert={showAlert} /></div>} />
  </Routes>
</Router>
   
    </>
  )
}

export default App
