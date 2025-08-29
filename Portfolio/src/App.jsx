import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactForm from "./contact-componants/ContactForm";
import Project from "./pages/Project";
import SideNavbar from "./nav-components/SideNavbar";
import Sidebar from "./nav-components/Sidebar";
// import { useEffect , useState } from "react";

function App() {
   
  return (
    <BrowserRouter>
      <div className="">
      
        <SideNavbar />
      </div>
      {/* <div className="">
            <Sidebar/>
          </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<ContactForm />} /> */}
        {/* <Route path="/project" element={<Project />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
