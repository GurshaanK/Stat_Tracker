import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import PlayerPage from "./pages/PlayerPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/playersPage" element={<PlayerPage />} />
        <Route path="/teamsPage" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
