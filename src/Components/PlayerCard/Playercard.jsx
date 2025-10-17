import React, { useState } from "react";
import manicon from "../../assets/user-1.png";
import flagimg from "../../assets/report-1.png";
import Avilableplayers from "../AvilablePlayer/Avilableplayers";
import { toast } from "react-toastify";

const Playercard = ({
  player,
  setAvilableBalance,
  AvailableBalance,
  BuyPlayers,
  setBuyPlayers,
}) => {
  const [choseplayer, setchoseplayer] = useState(false);
  const handlebalance = ({ player }) => {
    if (AvailableBalance < player.price) {
      toast("You Have Not Enough Balance");
      return;
    }
    if (BuyPlayers.length === 6) {
      toast("You Have Selected 6 Players!!!");
      return;
    }
    const newbalance = AvailableBalance - player.price;
    setchoseplayer(true);
    setAvilableBalance(newbalance);
    const newbuyplayer = [...BuyPlayers, player];
    setBuyPlayers(newbuyplayer);

    toast("Player Added Succesfully");
  };
  return (
    <div className="card bg-gray-100 shadow-sm p-2">
      <figure>
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-[350px] object-cover rounded-xl md:h-[400px] lg:h-[400px]"
        />
      </figure>
      <div className="mt-5">
        <div className="flex items-center gap-2 font-bold">
          <img src={manicon} alt="manicon" />
          <h2 className="text-xl">{player.name}</h2>
        </div>
        <div className="flex items-center justify-between mt-2 border-b-1 border-gray-300 pb-3">
          <div className="flex items-center gap-2">
            <img src={flagimg} alt="Flag-Img" />
            <h2 className="text-[18px] font-semibold">{player.country}</h2>
          </div>
          <button className="btn font-semibold text-[18px]">
            {player.role}
          </button>
        </div>
        <div className="font-bold text-[18px] flex justify-between  mt-4">
          <span>Rating</span>
          <span> {player.rating} </span>
        </div>
        <div className=" text-[18px] flex justify-between  mt-4">
          <span className="font-bold"> {player.batting} </span>
          <span> {player.bowling_style} </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-xl">Price: ${player.price}</p>
          <button
            disabled={choseplayer}
            onClick={() => handlebalance({ player })}
            className="btn text-lg font-semibold"
          >
            {choseplayer ? "Selceted" : "Select Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playercard;
