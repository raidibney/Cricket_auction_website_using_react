import { use, useState } from "react";
import { FaUser } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const AvailablePlayer = ({
  playerpromise,
  setcoin,
  selectedPlayers,
  setSelectedPlayers
}) => {

  const playerdata = use(playerpromise)

  const [selectedPlayersType, setselectedPlayersType]=useState("available");

  // ✅ FIXED choosePlayer
 const choosePlayer = (player) => {
  const numericPrice = Number(player.price.replace(/[$,]/g, ''));

  setcoin((prevCoin) => {
    if (prevCoin < numericPrice) {
      alert("Not enough money!");
      return prevCoin;
    }

    // prevent duplicate (outer check)
    const alreadySelected = selectedPlayers.some(
      (p) => p.playerName === player.playerName
    );

    if (alreadySelected) {
      alert("Player already selected!");
      return prevCoin;
    }

    alert(`${player.playerName} is selected`);

    // ✅ FIX: protect inside setter (important)
    setSelectedPlayers((prev) => {
      const exists = prev.some(
        (p) => p.playerName === player.playerName
      );
      if (exists) return prev; // stop duplicate
      return [...prev, player];
    });

    return prevCoin - numericPrice;
  });
};

  return (
    <section className="max-w-11/12 mx-auto">

      {/* toggle */}
      <div className="flex justify-between gap-6 my-[60px]">
        {selectedPlayersType==="available"
          ? <h2 className="text-2xl font-bold">Available Players </h2>
          : <h2 className="text-2xl font-bold">Selected Players </h2>
        }

        <div className="gap-6 ml-5">
          <button 
            onClick={()=>setselectedPlayersType("available")}
            className={`btn ${
              selectedPlayersType === "available" ? "btn-info" : "btn-ghost"
            } rounded-r-none rounded-l-4xl`}
          >
            Avaiable players
          </button>

          <button 
            onClick={()=>setselectedPlayersType("selected")}
            className={`btn ${
              selectedPlayersType === "selected" ? "btn-info" : "btn-ghost"
            } rounded-l-none rounded-r-4xl`}
          >
            Selected players
          </button>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">

        {selectedPlayersType === "available" &&
          playerdata.map((player) => (
            <div
              key={player.playerName}
              className="card bg-base-100 shadow-sm border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
            >
              <figure className="h-48 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover transition duration-300 hover:scale-110"
                  src={player.playerImage}
                  alt={player.playerName}
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">
                  <FaUser /> {player.playerName}
                </h2>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <FaFlag />
                    <p className="font-bold">
                      Country: {player.playerCountry}
                    </p>
                  </div>

                  <button className="btn btn-ghost">
                    {player.playingRole}
                  </button>
                </div>

                <h2 className="font-bold">Rating: {player.rating}</h2>

                <div className="flex justify-between font-bold">
                  <p>{player.battingStyle}</p>
                  <p className="text-right">{player.bowlingStyle}</p>
                </div>

                <div className="card-actions justify-between items-center">
                  <p className="font-bold">Price: {player.price}</p>

                  {/* ✅ FIXED BUTTON */}
                  <button
                    onClick={() => choosePlayer(player)}
                    className="btn btn-warning"
                  >
                    {
                      selectedPlayers.some(
                        (p) => p.playerName === player.playerName
                      )
                        ? "Selected"
                        : "Choose Player"
                    }
                  </button>
                </div>
              </div>
            </div>
          ))
        }

        {selectedPlayersType === "selected" && (
          <SelectedPlayers selectedPlayers={selectedPlayers} />
        )}

      </div>
    </section>
  );
};

export default AvailablePlayer;