import React, { useState } from "react";

const NewTeamPopup = ({
  popupVisible,
  setPopupVisible,
}: {
  popupVisible: boolean;
  setPopupVisible: (popupVisible: boolean) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    division: "",
    ppg: 0,
    w: null,
    l: null,
  });
  // const [name, setName] = useState<string>("");
  // const [division, setDivision] = useState<string>("");
  // const [ppg, setPpg] = useState<number>();
  // const [w, setW] = useState<number>();
  // const [l, setL] = useState<number>();

  if (!popupVisible) return null; // Don't render the modal if it’s not open

  const handleChange = (event) => {
    const { name, value } = event.target; // Get the name and value from the input field
    setFormData({
      ...formData, // Copy the existing state
      [name]: value, // Update the specific field
    });
  };

  return (
    <div className="w-3xl h-14">
      <div className="">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="textInput"
            type="text"
            name="name"
            value={formData.name} // Bind input value to state
            onChange={handleChange} // Update state on input change
          />
          <p>Input Value: {formData.name}</p>

          <label htmlFor="division">Division: </label>
          <input
            id="textInput"
            type="text"
            name="division"
            value={formData.division} // Bind input value to state
            onChange={handleChange} // Update state on input change
          />
          <p>Input Value: {formData.division}</p>

          <label htmlFor="ppg">PPG: </label>
          <input
            id="textInput"
            type="int"
            name="ppg"
            value={formData.ppg} // Bind input value to state
            onChange={handleChange} // Update state on input change
          />
          <p>Input Value: {formData.ppg}</p>
        </div>
        <button onClick={() => setPopupVisible(false)}>Close</button>
      </div>
    </div>
  );
};

export default NewTeamPopup;
