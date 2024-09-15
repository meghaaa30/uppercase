// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
 import TextForm from './Components/Form';
import React, { useState } from 'react';
import Alerttag from './Components/Alerttag';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const removebody=()=>{
     document.body.classList.remove('bg-light');
     document.body.classList.remove('bg-dark');
     document.body.classList.remove('bg-warning');
     document.body.classList.remove('bg-success');
     document.body.classList.remove('bg-danger');
  }
  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
          setAlert(null);
      }, 3000)
  }

  const toggleMode=(cls)=>{
    removebody();
    document.body.classList.add('bg-'+ cls);
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert('dark mode has been enabled', 'success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('light mode has been enabled', 'success')
    }
  }
  return (
    <>
    <Router>
<Navbar title="textutilS"  mode={mode} toggleMode={toggleMode}/>
<Alerttag alert={alert}></Alerttag>    

      <Routes>
      <Route exact path='/' element={<TextForm heading="Enter text here" mode={mode}/>} />
    
      <Route exact path='/about' element={<About/>} />
    
      </Routes>
      </Router>
  </>
  );
}

export default App;
