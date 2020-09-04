import {NameSpace} from './reducer/name-space';
import {State as DataState} from './reducer/data/data';
import {State as AppState} from './reducer/app-state/app-state';

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
  [NameSpace.DATA]: DataState;
  [NameSpace.APP]: AppState;
}

export interface User {
  id: number;
  name: string;
}

export interface Comment {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

export interface SendingComment {
  rating: number;
  comment: string;
}
