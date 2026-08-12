import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

import "./App.css";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <div className="flex">
        <h1>Oleksii Khudolei</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
