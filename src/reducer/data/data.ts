import {Movie, Action, Comment, SendingComment} from '../../types';
import MovieAdapter from '../../adapters/movie';

enum ActionType {
  SET_MOVIES = `SET_MOVIES`,
  SET_COMMENTS = `SET_COMMENTS`
}

interface State {
  allMovies: Movie[];
  comments: Comment[];
}

const initialState: State = {
  allMovies: [],
  comments: [],
};

const ActionCreator = {
  setMovies: (movies: Movie[]) => {
    return {
      type: ActionType.SET_MOVIES,
      payload: movies
    };
  },

  setComments: (comments: Comment[]) => {
    return {
      type: ActionType.SET_COMMENTS,
      payload: comments
    };
  }
};

const Operation = {

  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => dispatch(ActionCreator.setMovies(MovieAdapter.getMovies(response.data))))
  },

  loadComments: (movieId: number) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then((response) => {
        dispatch(ActionCreator.setComments(response.data));
      })
  },

  sendComment: (movieId: number, data: SendingComment) => (dispatch, getState, api) => {
    return api.post(`/comments/${movieId}`, data)
      .then((response) => console.log(response.data))
  }
};

const reducer = (state: State = initialState, action: Action) => {

  switch (action.type) {
    case ActionType.SET_MOVIES:
      return Object.assign({}, state, {
        allMovies: action.payload
      });
    case ActionType.SET_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload
      });
  }
  return state;
};

export {reducer, ActionCreator, ActionType, Operation, State};
