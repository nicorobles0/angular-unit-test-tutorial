import { Pager } from "./pager.interface";

export interface CharactersList {
  info: Pager;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: any;
  location: any;
  image: string;
  episode: string[];
  url: string;
  created: any;
}
