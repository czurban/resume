import { NavLink, Route, Routes } from "react-router-dom";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

import "./index.css";

function App() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between h-12 px-4 border-b border-t-0 border-l-0 border-r-0 border-[#232328]">
        <h1 className="text-xl tracking-widest font-medium">
          Oleksii Khudolei
        </h1>
        <div className="flex tracking-wide flex-row gap-8 pr-4 text-md">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
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
