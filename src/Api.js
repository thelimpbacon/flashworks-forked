import mockRequests from "./team-data.json";
import refData from "./row-data.json";

let team_size = Math.floor(Math.random() * 50 + 10);

export const getRequestsSync = () => {
  return includeRefData(mockRequests);
};

export const getRequests = () =>
  new Promise((resolve, reject) => {
    let data = includeRefData(mockRequests);
    setTimeout(() => resolve(data), 2000);
  });

const includeRefData = (data) => {
  return data.map((d) => {
    d["player_count"] = team_size;
    d["players"] = d.players.splice(0, team_size);
    d["row_reference"] = refData.data;
    return d;
  });
};
