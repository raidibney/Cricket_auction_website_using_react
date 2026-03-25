const SelectedPlayers = ({ selectedPlayers }) => {
  console.log(selectedPlayers);

  return (
    <div>
      <h2>Selected Players</h2>

      {selectedPlayers.length === 0 ? (
        <p>No players selected</p>
      ) : (
        selectedPlayers.map((player) => (
          <div key={player.playerName}>
            <h3>{player.playerName}</h3>
            <p>{player.playerCountry}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;