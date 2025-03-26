export interface Player {
  _id: string;
  Rk: number; // Rank
  Player: string; // Player Name
  Pos: string; // Position
  Age: number; // Age
  Tm: string; // Team Abbreviation
  G: number; // Games Played
  GS: number; // Games Started
  MP: number; // Minutes Per Game
  FG: number; // Field Goals Made
  FGA: number; // Field Goals Attempted
  "FG%": number; // Field Goal Percentage
  "3P": number; // Three-Pointers Made
  "3PA": number; // Three-Pointers Attempted
  "3P%": number; // Three-Point Percentage
  "2P": number; // Two-Pointers Made
  "2PA": number; // Two-Pointers Attempted
  "2P%": number; // Two-Point Percentage
  FT: number; // Free Throws Made
  FTA: number; // Free Throws Attempted
  "FT%": number; // Free Throw Percentage
  ORB: number; // Offensive Rebounds
  DRB: number; // Defensive Rebounds
  TRB: number; // Total Rebounds
  AST: number; // Assists
  STL: number; // Steals
  BLK: number; // Blocks
  TOV: number; // Turnovers
  PF: number; // Personal Fouls
  PTS: number; // Total Points
}
