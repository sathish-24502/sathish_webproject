import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Skills from "./components/Technologies";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SideNavbar/>
      {/* <Skills /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
