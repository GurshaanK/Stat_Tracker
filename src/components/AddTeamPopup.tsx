import React, { useState } from "react";

const AddTeamPopup = ({
  addTeamVisible,
  setAddTeamVisible,
  addTeam,
}: {
  addTeamVisible: boolean;
  setAddTeamVisible: (visible: boolean) => void;
  addTeam: (arg0) => void;
}) => {
  const [formData, setFormData] = useState({
    Name: "",
    Acronym: "",
    "Games Played": "",
    "Field Goals Attempted": "",
    "Field Goals Made": "",
    "3 Pointers Attempted": "",
    "3 Pointers Made": "",
    "2 Pointers Attempted": "",
    "2 Pointers Made": "",
    "Free Throws Attempted": "",
    "Free Throws Made": "",
    "Total Points": "",
    Wins: "",
    Losses: "",
  });

  if (!addTeamVisible) return null;

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Submitting team data:", formData);
    setAddTeamVisible(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-screen overflow-auto border-black border-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Team</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key} className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                {key}:
              </label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
          ))}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => setAddTeamVisible(false)}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={() => addTeam(formData)}
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeamPopup;
