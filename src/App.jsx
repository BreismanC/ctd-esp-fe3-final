import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useContext } from 'react';
import { ContextGlobal } from './Components/utils/global.context';

function App() {
  const { theme } = useContext(ContextGlobal)
  const darkMode = theme === "dark" || false
  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/detail/:id" element={ <Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
