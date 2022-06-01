import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextFormm from "./Components/TextFormm";

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 
// } from "react-router-dom";

function App() {
  const [mode, setmode]=useState('light');
  
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor= '#280d25';
      showAlert(" Dark Mode has been Enabled","success");
      document.title = "TextWorkspace - Dark Mode";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light Mode has been Enabled","success");
      document.title = "TextWorkspace - Light Mode";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextWorkspace" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     
      <div className="container my-3">
      {/* <Routes> */}
      {/* <Route exact path="/" element={<TextFormm showAlert={showAlert} heading="Enter the text here" mode={mode}/> }/>
      <Route path="/about" element={<About/>}/> */}
      <TextFormm showAlert={showAlert} heading="Enter the text here" mode={mode}/>
         
      {/* </Routes> */}
      
      </div>
       {/* </Router> */}
    </>
  );
}

export default App;
