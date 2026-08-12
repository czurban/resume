import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <>
      <div>
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl">Hi, i am Oleksii</h2>
          <p>Fullstack-разработчик</p>
          <button>Massage me</button>
        </div>
        <div>
          <h1>Summary</h1>
        </div>
        <div>
          <h1>Experience</h1>
        </div>
        <div>
          <h1>Skills</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};
