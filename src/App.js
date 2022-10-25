import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {
  About,
  Dark,
  Footer,
  Header,
  Skills,
  Work, 
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  const [mode, setMode] = useState("light")
  // document.body.style.backgroundColor = "#f7faff";
  const toggleSwitch = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = "hsl(240deg 73% 25%)";
      document.body.style.color = "var(--lightblue-color)";
    } else {
      setMode("light");
      // document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  // let Component
  // switch(window.location.pathname){
  //   case "/":
  //     Component = <App/>
  //     break
  //     case "/Home":
  //       Component = <Header mode={mode}toggleSwitch={toggleSwitch}/>
  //       break
  //       case "/About":
  //         Component = <About mode={mode}toggleSwitch={toggleSwitch}/>
  //         break
  // }
  return (
    <div className="app">
      <Navbar mode={mode} />
      <Dark mode={mode} toggleSwitch={toggleSwitch} />
      {/* {Component} */}
      <Routes>
        <Route path="/" element={<Header mode={mode}toggleSwitch={toggleSwitch}/>}/>
        <Route path="/Home" element={<Header mode={mode}toggleSwitch={toggleSwitch}/>}/>
        <Route path="/About" element={<About mode={mode}toggleSwitch={toggleSwitch}/>}/>
        <Route path="/Work" element={<Work mode={mode}toggleSwitch={toggleSwitch}/>}/>
        <Route path="/Skills" element={<Skills mode={mode}toggleSwitch={toggleSwitch}/>}/>
        <Route path="/Contact" element={<Footer mode={mode}toggleSwitch={toggleSwitch}/>}/>
      </Routes>
       {/* <Header mode={mode}toggleSwitch={toggleSwitch}/>
       <About mode={mode}toggleSwitch={toggleSwitch}/>
       <Work />
       <Skills />
       <Footer /> */}
    </div>
  );
}

export default App;
