import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import About from "./component/About";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#011036";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    // <BrowserRouter>
      <>
        <Navbar
          title="Textutils"
          home="Home"
          about="About"
          Mode={Mode}
          toggleMode={toggleMode}
        />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About/>} /> */}
          {/* <Route
            // path="/"
            // element={ */}
              <TextForm heading="Enter the text to analyse:" mode = {Mode} />
            {/* } */}
            {/* /> */}
        {/* </Routes> */}
            </div>
      </>
    // </BrowserRouter>
  );
}

export default App;
