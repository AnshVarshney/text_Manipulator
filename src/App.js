// rfc -> react function based component
// {}-> is used for using javascript
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// react router  
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  // const [mode1, setMode1] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggler = () => {
    if (mode === 'light') {
      setMode('dark');
      // setMode1('green');
      document.body.style.backgroundColor = '#092960';
      showAlert("Dark Mode is Enabled", "success");
    }
    else {
      setMode('light');
      // setMode1('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
    }
  }

  // const cgreen = ()=>{
  //   if(mode1==='light')
  //   {
  //     setMode1('green');
  //     setMode('dark');
  //     document.body.style.backgroundColor = 'green';
  //     showAlert("Green Dark Mode is Enabled","success");
  //   }
  //   else
  //   {
  //     setMode1('light');
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light Mode is Enabled","success");
  //   } 
  // }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggler={toggler} />
        {/* <About/> */}
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            {/* exact is used for complete matching without exact react uses partial matching eg /about/no here also /about will be render */}
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Char Counter , Word Counter"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App; 
