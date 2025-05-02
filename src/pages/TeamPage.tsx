import React, { useEffect, useState } from "react";
import { Team } from "../types/teams";
import TeamTable from "../components/TeamTable";
import DeleteTeamPopup from "../components/deleteTeamPopup";
import AddTeamPopup from "../components/AddTeamPopup";
import EditTeamPopup from "../components/EditTeamPopup";

export default function TeamPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [deleteTeamVisible, setDeleteTeamVisible] = useState<boolean>(false);
  const [addTeamVisible, setAddTeamVisible] = useState<boolean>(false);
  const [editTeamVisible, setEditTeamVisible] = useState<boolean>(false);

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

  async function addTeam(formData) {
    console.log("Form Data", formData);

    try {
      const formattedData = {
        Tm: formData.Name,
        ACR: formData.Acronym,
        G: formData["Games Played"],
        FG: formData["Field Goals Made"],
        FGA: formData["Field Goals Attempted"],
        "3P": formData["3 Pointers Made"],
        "3PA": formData["3 Pointers Attempted"],
        "2P": formData["2 Pointers Made"],
        "2PA": formData["2 Pointers Attempted"],
        FT: formData["Free Throws Made"],
        FTA: formData["Free Throws Attempted"],
        PTS: formData["Total Points"],
        W: formData.Wins,
        L: formData.Losses,
      };
      const response = await fetch("http://localhost:5001/add-team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Team added successfully!");
        window.location.reload();
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error adding team:", error);
      alert("Failed to add team. Please try again.");
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
            <button
              onClick={() => setAddTeamVisible(!addTeamVisible)}
              className="px-5 py-2 bg-green-500 rounded-md shadow-md hover:bg-green-600 hover:shadow-lg hover:cursor-pointer transition"
            >
              Add Team
            </button>

            <button
              onClick={() => setDeleteTeamVisible(!deleteTeamVisible)}
              className="px-5 py-2 bg-red-500 rounded-md shadow-md hover:bg-red-600 hover:shadow-lg hover:cursor-pointer transition"
            >
              Delete Team
            </button>

            <button
              onClick={() => setEditTeamVisible(!editTeamVisible)}
              className="px-5 py-2 bg-gray-300 rounded-md shadow-md hover:bg-gray-400 hover:shadow-lg hover:cursor-pointer transition"
            >
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
        <AddTeamPopup
          addTeamVisible={addTeamVisible}
          setAddTeamVisible={setAddTeamVisible}
          addTeam={addTeam}
        />
        <EditTeamPopup
          teams={teams}
          editTeamVisible={editTeamVisible}
          setEditTeamVisible={setEditTeamVisible}
        />
        <TeamTable data={teams} />
      </div>
    </div>
  );
}
