export interface Team {
  _id: string; // MongoDB ObjectId as a string
  name: string;
  division: string;
  ppg: number;
  w: number;
  l: number;
}
