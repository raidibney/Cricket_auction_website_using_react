import { use } from "react";
import { FaUser } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';

const AvailablePlayer = ({ playerpromise }) => {
  const playerdata = use(playerpromise)
  console.log(playerdata)

  return (
    <section className="max-w-11/12 mx-auto">

      <h2 className="text-xl font-bold mt-4">
        Available: {playerdata.length}
      </h2>

      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">

        {playerdata.map((player) => (
          <div
            key={player.id}
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
                  <p className="font-bold">Country: {player.playerCountry}</p>
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
                <button className="btn btn-warning">
                  Choose Player
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default AvailablePlayer;