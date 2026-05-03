import { useState } from "react";
import "./App.css";
import avatarImg from "./assets/ava.png";
import { card } from "./card.js";

const Cards = ({ name, discription }) => {
  return (
    <div className="card-item">
      <h1>{name}</h1>
      <p>{discription}</p>
    </div>
  );
};

function App() {
  const [skill, setSkill] = useState("");
  const [allSkills, setAllSkills] = useState([]);

  function handleInput(e) {
    setSkill(e.target.value);
  }

  function addSkill() {
    if (skill.trim() !== "") {
      setAllSkills([...allSkills, skill]);
      setSkill("");
    }
  }

  return (
    <div className="mainDiv">
      <div className="top">
        <img
          className="img"
          src={avatarImg}
          alt="avatar"
          width={350}
          height={450}
        />
        <h2>Oleksii Khudolei</h2>
        <p>Jestem eblanem</p>
      </div>

      <div>
        <div>
          <input
            value={skill}
            type="text"
            placeholder="show ur skills"
            onChange={handleInput}
          />
          <button onClick={addSkill}>add</button>
        </div>
        <ul className="list">
          {allSkills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="list">
        {card.map((parametr) => (
          <Cards
            key={parametr.id}
            name={parametr.name}
            discription={parametr.discription}
          />
        ))}
      </div>

      <div className="list">
        <p>git</p>
        <p>linkedin</p>
        <p>mess</p>
      </div>
    </div>
  );
}

export default App;
