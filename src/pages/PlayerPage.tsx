import React, { useState, useEffect } from "react";
import { Player } from "../types/player";

export default function PlayerPage() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);

  return <h1>PlayerPage</h1>;
}
