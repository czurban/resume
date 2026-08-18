import { motion } from "framer-motion";
import { NavLink, Route, Routes } from "react-router-dom";
import "./index.css";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
  const linkBase = "transition-colors duration-200 cursor-pointer";

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d11] text-white">
      <header className="sticky top-0 z-50 bg-[#0d0d11]/80 backdrop-blur-md flex flex-row items-center justify-between h-12 px-4 border-b border-[#232328]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-xl tracking-widest font-medium">
            Oleksii Khudolei
          </h1>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex tracking-wide flex-row gap-8 pr-4 text-md"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-gray-400" : "text-[#f8f9fa] hover:text-gray-300"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-gray-400" : "text-[#f8f9fa] hover:text-gray-300"}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-gray-400" : "text-[#f8f9fa] hover:text-gray-300"}`
            }
          >
            Contacts
          </NavLink>
        </motion.nav>
      </header>

      <main className="relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
