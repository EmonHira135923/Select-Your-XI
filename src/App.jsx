import "./App.css";
import NavVar from "./Components/Navar/NavVar";
import Avilableplayers from "./Components/AvilablePlayer/Avilableplayers";
import SelectedPlayers from "./Components/SelectedPlayer/SelectedPlayers";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

const fetchplayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const messagepromise = fetchplayers();

function App() {
  const [toggle, settoggle] = useState(true);
  const [AvailableBalance, setAvilableBalance] = useState(70000000);
  const [BuyPlayers, setBuyPlayers] = useState([]);
  const removeplayer = (p) => {
    const deleteplayer = BuyPlayers.filter((player) => player.id !== p.id);
    setBuyPlayers(deleteplayer);
    setAvilableBalance(AvailableBalance + parseInt(p.price));
  };
  return (
    <>
      <NavVar AvailableBalance={AvailableBalance}></NavVar>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center mt-5">
        <h1 className="font-bold text-2xl">
          {" "}
          {toggle
            ? "Available Players"
            : ` Selected Player ${BuyPlayers.length}/6`}
        </h1>
        <div className="flex items-center text-lg font-bold">
          <button
            onClick={() => {
              settoggle(true);
            }}
            className={`btn p-4 border-r-0 ${
              toggle === true ? "bg-[#e7fe29]" : ""
            } rounded-l-2xl px-4 py-3`}
          >
            Available
          </button>
          <button
            onClick={() => {
              settoggle(false);
            }}
            className={`btn p-4 border-l-0 rounded-r-2xl px-4 py-3 ${
              toggle === false ? "bg-[#e7fe29]" : ""
            }`}
          >
            Selected <span>({BuyPlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Avilableplayers
            BuyPlayers={BuyPlayers}
            setBuyPlayers={setBuyPlayers}
            AvailableBalance={AvailableBalance}
            setAvilableBalance={setAvilableBalance}
            messagepromise={messagepromise}
          ></Avilableplayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removeplayer={removeplayer}
          BuyPlayers={BuyPlayers}
        ></SelectedPlayers>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
