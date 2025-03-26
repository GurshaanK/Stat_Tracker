import React, { useState, useEffect } from "react";
import { Player } from "../types/player";

export default function Players() {
  const [players, setPlayers] = useState<Player[]>([]);

  console.log("Players:", players);

  useEffect(() => {
    fetch("http://localhost:5001/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);

  return (
    <div className="container mx-auto p-4 bg-amber-50">
      <h1 className="p-3.5 text-center font-bold">Players List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.Rk}>
              <td>{player.Player}</td>
              <td>{player.Pos}</td>
              <td>{player.Tm}</td>
              <td>{player["2P"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
