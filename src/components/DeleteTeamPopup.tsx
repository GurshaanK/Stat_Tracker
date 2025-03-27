import React, { useState } from "react";
import { Team } from "../types/teams";

const DeleteTeamPopup = ({
  deleteTeamVisible,
  setDeleteTeamVisible,
  deleteTeam,
  teams,
}: {
  deleteTeamVisible: boolean;
  setDeleteTeamVisible: (popupVisible: boolean) => void;
  deleteTeam: (team: string) => void;
  teams: Team[];
}) => {
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  if (!deleteTeamVisible) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 flex justify-center items-start mt-44 z-50">
      {/* Modal Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800">Delete Team</h2>

        {/* Content */}
        <p className="text-gray-600 mt-2">
          Are you sure you want to delete this team? This action cannot be
          undone.
        </p>

        <div className="mt-4">
          <label className="block text-gray-700 mb-2">Select Team</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            <option value="">Select a team</option>
            {teams.map((team) => (
              <option key={team._id} value={team._id}>
                {team.Tm}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-end space-x-3">
          <button
            onClick={() => {
              setDeleteTeamVisible(false);
              setSelectedTeam("");
            }}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              deleteTeam(selectedTeam);
              setDeleteTeamVisible(false);
              setSelectedTeam("");
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTeamPopup;
