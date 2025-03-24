export interface Player {
  _id: string; // MongoDB ObjectId as a string
  name: string;
  position: string;
  team_id: string; // Team ID (you can further define a Team type if needed)
}
