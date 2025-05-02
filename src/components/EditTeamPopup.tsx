import { useState, useEffect } from "react";
import { Team } from "../types/teams";

const EditTeamPopup = ({
  teams,
  editTeamVisible,
  setEditTeamVisible,
}: {
  teams: Team[];
  editTeamVisible: boolean;
  setEditTeamVisible: (visible: boolean) => void;
}) => {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    Tm: "",
    ACR: "",
    G: 0,
    MP: 0,
    FG: 0,
    FGA: 0,
    "3P": 0,
    "3PA": 0,
    "2P": 0,
    "2PA": 0,
    FT: 0,
    FTA: 0,
    PTS: 0,
    W: 0,
    L: 0,
  });

  if (!editTeamVisible) return null;

  const handleTeamSelect = (event) => {
    const teamId = event.target.value;
    setSelectedTeamId(teamId);

    const team = teams.find((t: Team) => t._id === teamId);
    if (team) {
      setFormData({
        Tm: team.Tm,
        ACR: team.ACR,
        G: team.G,
        MP: team.MP,
        FG: team.FG,
        FGA: team.FGA,
        "3P": team["3P"],
        "3PA": team["3PA"],
        "2P": team["2P"],
        "2PA": team["2PA"],
        FT: team.FT,
        FTA: team.FTA,
        PTS: team.PTS,
        W: team.W,
        L: team.L,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedTeamId) {
      alert("Please select a team first.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5001/edit-team/${selectedTeamId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Team updated successfully!");
        setEditTeamVisible(false);
        window.location.reload();
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error updating team:", error);
      alert("Failed to update team. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-full overflow-y-auto border border-gray-300">
        <h1 className="text-2xl font-bold mb-4 text-center">Edit Team</h1>

        {/* Dropdown to select a team */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Select a Team:
          </label>
          <select
            value={selectedTeamId}
            onChange={handleTeamSelect}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">-- Choose a Team --</option>
            {teams.map((team: Team) => (
              <option key={team._id} value={team._id}>
                {team.Tm} ({team.ACR})
              </option>
            ))}
          </select>
        </div>

        {/* Form to edit the selected team */}
        {formData && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Team Name
                </label>
                <input
                  type="text"
                  name="Tm"
                  value={formData.Tm}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Acronym
                </label>
                <input
                  type="text"
                  name="ACR"
                  value={formData.ACR}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Games Played
                </label>
                <input
                  type="number"
                  name="G"
                  value={formData.G}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Minutes Played
                </label>
                <input
                  type="number"
                  name="MP"
                  value={formData.MP}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Field Goals Made
                </label>
                <input
                  type="number"
                  name="FG"
                  value={formData.FG}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Field Goals Attempted
                </label>
                <input
                  type="number"
                  name="FGA"
                  value={formData.FGA}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  3 Pointers Made
                </label>
                <input
                  type="number"
                  name="3P"
                  value={formData["3P"]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  3 Pointers Attempted
                </label>
                <input
                  type="number"
                  name="3PA"
                  value={formData["3PA"]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  2 Pointers Made
                </label>
                <input
                  type="number"
                  name="2P"
                  value={formData["2P"]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  2 Pointers Attempted
                </label>
                <input
                  type="number"
                  name="2PA"
                  value={formData["2PA"]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Free Throws Made
                </label>
                <input
                  type="number"
                  name="FT"
                  value={formData.FT}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Free Throws Attempted
                </label>
                <input
                  type="number"
                  name="FTA"
                  value={formData.FTA}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Total Points
              </label>
              <input
                type="number"
                name="PTS"
                value={formData.PTS}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Wins</label>
                <input
                  type="number"
                  name="W"
                  value={formData.W}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Losses
                </label>
                <input
                  type="number"
                  name="L"
                  value={formData.L}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Update Team
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditTeamVisible(false);
                  setSelectedTeamId(null);
                  setFormData({
                    Tm: "",
                    ACR: "",
                    G: 0,
                    MP: 0,
                    FG: 0,
                    FGA: 0,
                    "3P": 0,
                    "3PA": 0,
                    "2P": 0,
                    "2PA": 0,
                    FT: 0,
                    FTA: 0,
                    PTS: 0,
                    W: 0,
                    L: 0,
                  });
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditTeamPopup;
