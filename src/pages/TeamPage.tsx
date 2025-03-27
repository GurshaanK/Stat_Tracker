import React, { useEffect, useState } from "react";
import { Team } from "../types/teams";
import TeamTable from "../components/TeamTable";
import DeleteTeamPopup from "../components/deleteTeamPopup";

export default function TeamPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [deleteTeamVisible, setDeleteTeamVisible] = useState<boolean>(false);

  console.log("Teams:", teams);

  useEffect(() => {
    fetch("http://localhost:5001/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);

  async function deleteTeam(teamId: string) {
    console.log("Delete Team:", teamId);

    try {
      const response = await fetch(`http://localhost:5001/teams/${teamId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTeams(teams.filter((team) => team._id !== teamId));
        console.log("Team deleted successfully");
      } else {
        console.error("Failed to delete team");
      }
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  }

  return (
    <div className={"bg-gray-200 flex w-full min-h-screen justify-center "}>
      <div className={"bg-white w-4/5 m-3 py-3 px-5 rounded-lg"}>
        <div className="w-full justify-between flex-row flex items-center">
          <h1 className={"text-2xl font-bold"}>NBA Team Stats Playoffs 24</h1>
          {/* <div>
            <button className={"px-4 py-2 bg-green-400 hover:bg-opacity-75"}>
              Add Team
            </button>
            <button className={"px-4 py-2 bg-red-500 mx-1"}>Delete Team</button>
            <button className={"px-4 py-2 bg-gray-300"}>Edit</button>
          </div> */}
          <div className="flex space-x-2">
            <button className="px-5 py-2 bg-green-500 rounded-md shadow-md hover:bg-green-600 hover:shadow-lg hover:cursor-pointer transition">
              Add Team
            </button>

            <button
              onClick={() => setDeleteTeamVisible(!deleteTeamVisible)}
              className="px-5 py-2 bg-red-500 rounded-md shadow-md hover:bg-red-600 hover:shadow-lg hover:cursor-pointer transition"
            >
              Delete Team
            </button>

            <button className="px-5 py-2 bg-gray-300 rounded-md shadow-md hover:bg-gray-400 hover:shadow-lg hover:cursor-pointer transition">
              Edit
            </button>
          </div>
        </div>
        <DeleteTeamPopup
          deleteTeamVisible={deleteTeamVisible}
          setDeleteTeamVisible={setDeleteTeamVisible}
          deleteTeam={deleteTeam}
          teams={teams}
        />
        <TeamTable data={teams} />
      </div>
    </div>
  );
}
