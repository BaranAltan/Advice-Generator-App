import "./App.css";
import "primeflex/primeflex.css";
import pause from "../src/images/pattern-divider-desktop.svg";
import dice from "../src/images/icon-dice.svg";

function App() {
  return (
    <div className="flex w-full min-h-screen 	justify-content-center align-items-center ">
      <div
        className="card border-round-xl w-30rem  flex flex-column justify-content-center align-items-center gap-6 p-4 pt-5"
        style={{ backgroundColor: "hsl(217, 19%, 24%)" }}
      >
        <div className="title">ADVICE</div>
        <div className="advance">Hello My Friend</div>
        <img src={pause} />
        <div className="round border-circle w-4rem h-4rem flex justify-content-center align-items-center -mb-6">
          <img src={dice} alt="" className="dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
