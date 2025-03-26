export interface Team {
  _id: string;
  Rk: number; // Rank
  Tm: string; // Team Name
  ACR: string; // Team Abbreviation
  G: number; // Games Played
  MP: number; // Minutes Played
  FG: number; // Field Goals Made
  FGA: number; // Field Goals Attempted
  FGPercent: number; // Field Goal Percentage
  ThreeP: number; // Three-Pointers Made
  ThreePA: number; // Three-Pointers Attempted
  ThreePPercent: number; // Three-Point Percentage
  TwoP: number; // Two-Pointers Made
  TwoPA: number; // Two-Pointers Attempted
  TwoPPercent: number; // Two-Point Percentage
  FT: number; // Free Throws Made
  FTA: number; // Free Throws Attempted
  FTPercent: number; // Free Throw Percentage
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
