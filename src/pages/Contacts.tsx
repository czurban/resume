import { Footer } from "../components/Footer";
export const Contacts = () => {
  return (
    <>
      <div>
        <div>
          <h3></h3>
          <p></p>
        </div>
        <div>
          <button>Email</button>
          <button>Telegram</button>
          <button>linkedIn</button>
          <button>GitHub</button>
        </div>
        <div>
          <form>
            <input type="text"></input>
            <input type="email"></input>
            <input type="text"></input>
            <button>Send →</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
