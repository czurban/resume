import "./App.css";
import { card } from "./card.js";

const Cards = ({ name, discription }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{discription}</p>
    </div>
  );
};
const Skills = ({ skill }) => {
  return <li>{skill}</li>;
};

function App() {
  return (
    <div className="mainDiv">
      <div>
        <img src="" alt="avatar"></img>
        <h2></h2>
        <p></p>
      </div>
      <div>
        <input type="text" placeholder="show ur skills"></input>
        <div></div>
      </div>
      <div>
        {card.map((parametr) => {
          return (
            <Cards
              key={parametr.id}
              name={parametr.name}
              discription={parametr.discription}
            />
          );
        })}
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
export default App;
