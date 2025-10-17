import React, { use } from "react";
import Playercard from "../PlayerCard/Playercard";

const Avilableplayers = ({
  messagepromise,
  setAvilableBalance,
  AvailableBalance,
  BuyPlayers,
  setBuyPlayers,
}) => {
  const playerdata = use(messagepromise);
  return (
    <div className="mx-auto max-w-[1200px] mt-5 mb-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {playerdata.map((player) => (
        <Playercard
          BuyPlayers={BuyPlayers}
          setBuyPlayers={setBuyPlayers}
          AvailableBalance={AvailableBalance}
          setAvilableBalance={setAvilableBalance}
          key={player.id}
          player={player}
        ></Playercard>
      ))}
    </div>
  );
};

export default Avilableplayers;
