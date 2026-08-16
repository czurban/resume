import { NavLink } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Sections } from "../components/Sections";
import { SkillGroups } from "../components/SkillGroups";
export const Home = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center mt-5 max-w-4xl mx-auto px-6">
          <h2 className="font-bold text-3xl">Hi, i am Oleksii</h2>
          <p className="text-md text-zinc-400">Fullstack-developer</p>
          <NavLink to="/contacts">
            <button className="border border-[#F8F9FA] px-6 py-3 rounded-3xl mt-3 cursor-pointer transition-colors hover:bg-white hover:text-black">
              Message me
            </button>
          </NavLink>
        </div>
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
          <Sections number="01" title="Summary">
            <p className="text-zinc-300 leading-relaxed max-w-2xl">
              <span className="text-white font-medium">
                Junior Full-Stack Developer
              </span>{" "}
              with hands-on experience in the modern React/TypeScript ecosystem,
              Node.js, and Express. Gained commercial experience during an
              internship at DataArt, working in an Agile environment. I focus on
              writing clean, scalable code, responsive interfaces with Tailwind
              CSS, and designing and deploying backend applications using the
              MERN stack and Docker.
            </p>
          </Sections>

          <Sections number="02" title="Experience">
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-white font-medium">
                DataArt — Trainee Frontend Developer
              </h3>
              <span className="text-xs text-zinc-500 font-mono bg-[#1a1a1d] px-2 py-1 rounded-full">
                06/2025 – 08/2025
              </span>
            </div>
            <p className="text-sm text-zinc-500 mb-3">Lublin, Poland</p>
            <ul className="space-y-1.5">
              <li className="text-zinc-300 text-sm flex gap-2">
                <span className="text-zinc-600">—</span>
                Worked with version control systems (Git) and technical
                documentation
              </li>
              <li className="text-zinc-300 text-sm flex gap-2">
                <span className="text-zinc-600">—</span>
                Implemented UI components based on React and JavaScript
              </li>
              <li className="text-zinc-300 text-sm flex gap-2">
                <span className="text-zinc-600">—</span>
                Collaborated with the IT team using Agile methodologies
              </li>
            </ul>
          </Sections>

          <Sections number="03" title="Education">
            <h3 className="text-white font-medium">Akademia WSEI — Engineer</h3>
            <p className="text-sm text-zinc-500 mt-1">
              Lublin, Poland · 10/2024 – Present
            </p>
          </Sections>

          <Sections number="04" title="Skills">
            <SkillGroups
              label="Frontend"
              skills={[
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "TypeScript",
                "React",
                "React Router",
                "Axios",
                "Tailwind CSS",
              ]}
            />
            <SkillGroups
              label="Backend"
              skills={[
                "Node.js",
                "Express.js",
                "MongoDB (Atlas)",
                "REST API",
                "Vercel Serverless",
              ]}
            />
            <SkillGroups
              label="Tools & Ecosystem"
              skills={[
                "Git",
                "GitHub",
                "Webpack/Vite",
                "Linux",
                "Docker",
                "Postman",
              ]}
            />
          </Sections>
        </div>
      </div>
      <Footer />
    </>
  );
};
