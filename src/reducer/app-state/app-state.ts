import {Action} from './../../types';
import {Genre} from '../../const';

interface State {
  genre: string;
  selectedMovie: number;
}

const initialState: State = {
  genre: Genre.ALL_GENRES,
  selectedMovie: 1,
};

enum ActionType {
  SET_GENRE = `SET_GENRE`,
  SET_SELECTED_MOVIE = `SET_SELECTED_MOVIE`
}

const ActionCreator = {
  setGenre: (genreName: string) => {
    return {
      type: ActionType.SET_GENRE,
      payload: genreName,
    }
  },

  setSelectedMovie: (id: number) => {
    return {
      type: ActionType.SET_SELECTED_MOVIE,
      payload: id,
    }
  }
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case ActionType.SET_SELECTED_MOVIE:
      return Object.assign({}, state, {
        selectedMovie: action.payload
      })
  }

  return state;
};

export {ActionCreator, reducer, ActionType, State};
