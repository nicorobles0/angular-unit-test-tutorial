import { Pager } from "./pager.interface";

export interface CharactersList {
  info: Pager;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: string; 
  image: string;
}
