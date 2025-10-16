import "./App.css";
import NavVar from "./Components/Navar/NavVar";
import Avilableplayers from "./Components/AvilablePlayer/Avilableplayers";
import SelectedPlayers from "./Components/SelectedPlayer/SelectedPlayers";
import { Suspense } from "react";

const fetchplayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const messagepromise = fetchplayers();
  return (
    <>
      <NavVar></NavVar>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Avilableplayers messagepromise={messagepromise}></Avilableplayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
