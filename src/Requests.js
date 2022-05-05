import React, { useEffect, useState } from "react";
import { getRequests } from "./Api";

function compareHeight(a, b) {
  return a.height - b.height;
}

const Requests = () => {
  const [rowReference, setRowReference] = useState(undefined);
  const [players, setPlayers] = useState(undefined);

  useEffect(() => {
    getRequests().then((data) => {
      const playerCount = data[0].player_count;
      const currentRowReference = data[0].row_reference.filter(
        (row) => row.player_count === playerCount
      );
      setRowReference(currentRowReference[0]);

      const sortedPlayers = data[0].players.sort(compareHeight);
      setPlayers(sortedPlayers);
    });
  }, []);

  console.log(players);

  return <div>Your code will go here</div>;
};

export default Requests;
