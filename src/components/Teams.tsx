// import React, { useState, useEffect } from "react";
// import { Team } from "../types/teams";
// import NewTeamPopup from "./AddTeamPopup";

// export default function Players() {
//   const [teams, setTeams] = useState<Team[]>([]);
//   const [popupVisible, setPopupVisible] = useState<boolean>(false);

//   console.log("Teams:", teams);

//   console.log(popupVisible);

//   useEffect(() => {
//     fetch("http://localhost:5001/teams")
//       .then((res) => res.json())
//       .then((data) => setTeams(data))
//       .catch((error) => console.error("Error fetching players:", error));
//   }, []);

//   return (
//     <div className="container mx-auto p-4 bg-amber-50 mt-5">
//       <button
//         onClick={() => setPopupVisible(!popupVisible)}
//         className="p-5 text-center bg-blue-50"
//       >
//         Add Team
//       </button>
//       <NewTeamPopup
//         popupVisible={popupVisible}
//         setPopupVisible={setPopupVisible}
//       />
//       <h1 className="p-3.5 text-center font-bold">Teams List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Win/Loss</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teams.map((team) => (
//             <tr key={team.ACR}>
//               <td>{team.Tm}</td>
//               <td>
//                 {team.W}-{team.L}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
