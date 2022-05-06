import React from "react";

const heightSorter = (array) => {
  if (!array) return;

  array.sort(function (a, b) {
    return a.height - b.height;
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
        border: "5px solid gray",
        flexDirection: "row",
        gap: "1em",
        padding: "1em",
        justifyContent: "start",
      }}
    >
      <h3
        style={{
          minWidth: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {row}
      </h3>

      {heightSorter(players).map((player) => {
        return (
          <div
            key={player.id}
            style={{
              border: "2px solid green",
              width: "170px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h5 style={{ display: "flex", gap: "1em" }}>
                <span>
                  {player.first_name} {player.last_name}
                </span>
                <span>({player.height})</span>
              </h5>
            </div>

            <img src={player.face_url} style={{ objectFit: "scale-down" }} />
          </div>
        );
      })}
    </div>
  );
};

export default Rows;
