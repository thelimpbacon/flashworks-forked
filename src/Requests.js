import React, { useEffect, useState } from "react";
import { getRequests } from "./Api";
import Rows from "./components/Rows";

const compareHeight = (a, b) => {
  return a.height - b.height;
};

const slicer = (array, start, end) => array.slice(start, end);

const Requests = () => {
  const [rowReference, setRowReference] = useState(undefined);
  const [players, setPlayers] = useState(undefined);
  const [rows, setRows] = useState({
    row1: undefined,
    row2: undefined,
    row3: undefined,
    row4: undefined,
    row5: undefined,
  });

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

  useEffect(() => {
    if (!rowReference) return;
    setRows({
      row1: slicer(players, 0, rowReference.row_1),
      row2: slicer(
        players,
        rowReference.row_1,
        rowReference.row_1 + rowReference.row_2
      ),
      row3: slicer(
        players,
        rowReference.row_1 + rowReference.row_2,
        rowReference.row_2 + rowReference.row_3
      ),
      row4: slicer(
        players,
        rowReference.row_2 + rowReference.row_3,
        rowReference.row_3 + rowReference.row_4
      ),
      row5: slicer(
        players,
        rowReference.row_3 + rowReference.row_4,
        rowReference.row_4 + rowReference.row_5
      ),
    });
  }, [players]);

  return (
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <Rows row="Row 1" players={rows.row1} />
      <Rows row="Row 2" players={rows.row2} />
      <Rows row="Row 3" players={rows.row3} />
      <Rows row="Row 4" players={rows.row4} />
      <Rows row="Row 5" players={rows.row5} />
    </div>
  );
};

export default Requests;
