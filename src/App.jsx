import "./App.css";
import "primeflex/primeflex.css";
import pause from "../src/images/pattern-divider-desktop.svg";
import dice from "../src/images/icon-dice.svg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(null);

  const get_api = async () => {
    const response = await axios.get("	https://api.adviceslip.com/advice");

    if (response.data.slip.id !== adviceId) {
      setAdvice(response.data.slip.advice);
      setAdviceId(response.data.slip.id);
    } else {
      get_api();
    }
  };

  useEffect(() => {
    get_api();
  }, []);

  return (
    <div className="flex w-full min-h-screen 	justify-content-center align-items-center ">
      <div
        className="card border-round-xl w-30rem  flex flex-column justify-content-center align-items-center gap-6 p-4 pt-5"
        style={{ backgroundColor: "hsl(217, 19%, 24%)" }}
      >
        <div className="title">{`ADVICE #${adviceId}`}</div>
        <div className="advance text-center	">{advice}</div>
        <img src={pause} />
        <div
          className="round border-circle w-4rem h-4rem flex justify-content-center align-items-center -mb-6"
          onClick={get_api}
        >
          <img src={dice} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
