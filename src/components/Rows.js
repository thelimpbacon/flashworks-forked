import React from "react";

const heightSorter = (array) => {
  if (!array) return;
  array.sort(function (a, b) {
    return a - b;
  });
  let right = array.slice(array.length / 2, array.length).reverse();
  let left = array.slice(0, array.length / 2);
  array = left.concat(right);
  return array;
};

const Rows = ({ row, players }) => {
  if (!players || players.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid gray",
        flexDirection: "row",
        gap: "1em",
        padding: "1em",
      }}
    >
      <div>{row}</div>

      {heightSorter(players).map((player) => {
        return (
          <div
            key={player.id}
            style={{
              border: "1px solid green",
              minWidth: "200px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4 style={{ display: "flex", gap: "1em" }}>
              <span>
                {player.first_name} {player.last_name}
              </span>
              <span>({player.height})</span>
            </h4>
            <img src={player.face_url} style={{ objectFit: "scale-down" }} />
          </div>
        );
      })}
    </div>
  );
};

export default Rows;
