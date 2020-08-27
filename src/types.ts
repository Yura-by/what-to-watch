export interface Movie {
  id: number;
  backgroundColor: string;
  backgroundImage: string;
  description: string;
  director: string;
  genre: string;
  isFavorite: boolean;
  name: string;
  posterImage: string;
  previewImage: string;
  previewVideoLink: string;
  rating: number;
  released: number;
  runTime: number;
  scoresCount: number;
  starring: string[];
  videoLink: string
}

export interface Action {
  type: string;
  payload: any;
}

export interface Store {
  allMovies: Movie[];
  genre: string;
}
