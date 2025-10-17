import React from "react";
import Navimg from "../../assets/logo.png";
import NavCoin from "../../assets/Coin.jpeg";

const NavVar = ({ AvailableBalance }) => {
  // console.log(AvailableBalance);
  return (
    <div className="navbar mx-auto max-w-[1200px]">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-[60px] h-[60px]" src={Navimg} alt="Nav-logo" />
        </a>
      </div>
      <div className="flex items-center font-bold text-xl">
        <span className="mr-1"> {AvailableBalance} </span>
        <span className="mr-1">Coin</span>
        <span>
          <img className="w-[40px] h-[40px]" src={NavCoin} alt="Nav-Coin" />
        </span>
      </div>
    </div>
  );
};

export default NavVar;
