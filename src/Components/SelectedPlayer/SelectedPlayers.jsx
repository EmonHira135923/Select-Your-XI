import React from "react";
import SelectedCard from "../SelectedPlayerCard/SelectedCard";
const SelectedPlayers = ({ BuyPlayers, removeplayer }) => {
  console.log(BuyPlayers);
  return (
    <div className="max-w-[1200px] mx-auto mt-5">
      {BuyPlayers.map((player) => (
        <SelectedCard
          removeplayer={removeplayer}
          key={player.id}
          player={player}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
