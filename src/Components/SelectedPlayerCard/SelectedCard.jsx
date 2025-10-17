import React from "react";

const SelectedCard = ({ player, removeplayer }) => {
  return (
    <div className="flex justify-between items-center border border-gray-300 rounded-xl p-3 mt-5">
      <div className="flex items-center">
        <img
          src={player.image}
          alt={player.name}
          className="w-[100px] h-[100px]"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{player.name}</h1>
          <p className="text-gray-500 font-semibold">{player.role}</p>
        </div>
      </div>
      <div>
        <img
          onClick={() => removeplayer(player)}
          src="https://i.ibb.co.com/1BsHt8T/Frame.png"
          alt="Frame"
          className="w-[30px] h-[30px] mr-5"
        />
      </div>
    </div>
  );
};

export default SelectedCard;
