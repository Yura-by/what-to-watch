import {Movie, Action, Store} from '../types';
import {Genre} from '../const';

enum ActionType {
  SET_MOVIES = `SET_MOVIES`,
  SET_GENRE = `SET_GENRE`,
}

const initialState: Store = {
  allMovies: null,
  genre: Genre.ALL_GENRES
};

const ActionCreator = {
  setMovies: (movies: Movie[]): Action => {
    return {
      type: ActionType.SET_MOVIES,
      payload: movies
    };
  },

  setGenre: (genre: string): Action => {
    return {
      type: ActionType.SET_GENRE,
      payload: genre
    }
  }
};

const reducer = (state: Store = initialState, action: Action): Store => {

  switch(action.type) {
    case ActionType.SET_MOVIES:
      return {
        ...state,
        allMovies: action.payload
      }
    case ActionType.SET_GENRE:
      return {
        ...state,
        genre: action.payload
      }
  }

  return state;
};

export {reducer, ActionCreator};
