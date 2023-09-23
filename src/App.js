import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { Alert } from "bootstrap";


function App() {
  const [mode,serMode]=useState('danger')
  return (
    <>
      {/* NavBar */}
      <Navbar title="TextutilS" aboutText="About Us" mode={mode}/>
      {/* <Alert alert="hii this is alert"/> */}
      <div className="container">
        <TextForm heading="enter the text to analyze"/>
      </div>

      <About/>
    </>
    
  );
}

export default App;
