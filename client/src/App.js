import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import NavBar from './components/NavBar'

function App() {

  return (
    <>
        <NavBar/>
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
