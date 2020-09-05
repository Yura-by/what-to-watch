import {Movie, Action, Comment, SendingComment} from '../../types';
import MovieAdapter from '../../adapters/movie';

enum ActionType {
  SET_MOVIES = `SET_MOVIES`,
  SET_COMMENTS = `SET_COMMENTS`,
  SET_IS_SENDING_COMMENT = `SET_IS_SENDING_COMMENT`,
  SET_IS_BAD_SENT_COMMENT = `SET_IS_BAD_SENT_COMMENT`,
  SET_IS_COMMENT_SENT = `SET_IS_COMMENT_SENT`,
}

interface State {
  allMovies: Movie[];
  comments: Comment[];
  isSendingComment: boolean;
  isBadSentComment: boolean;
  isCommentSent: boolean;
}

const initialState: State = {
  allMovies: [],
  comments: [],
  isSendingComment: false,
  isBadSentComment: false,
  isCommentSent: false,
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
  },

  setIsSendingComment: (isSending: boolean) => {
    return {
      type: ActionType.SET_IS_SENDING_COMMENT,
      payload: isSending,
    }
  },

  setIsBadSentComment: (isBad: boolean) => {
    return {
      type: ActionType.SET_IS_BAD_SENT_COMMENT,
      payload: isBad,
    }
  },

  setIsCommentSent: (isSent: boolean) => {
    return {
      type: ActionType.SET_IS_COMMENT_SENT,
      payload: isSent,
    }
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
    dispatch(ActionCreator.setIsSendingComment(true));
    return api.post(`/comments/${movieId}`, data)
      .then(() => {
        dispatch(ActionCreator.setIsSendingComment(false));
        dispatch(ActionCreator.setIsBadSentComment(false));
        dispatch(ActionCreator.setIsCommentSent(true));
      })
      .catch((err) => {
        dispatch(ActionCreator.setIsSendingComment(false));
        if (err.response.status === 400) {
          dispatch(ActionCreator.setIsBadSentComment(true));
        }
      });
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
    case ActionType.SET_IS_SENDING_COMMENT:
      return Object.assign({}, state, {
        isSendingComment: action.payload,
      });
    case ActionType.SET_IS_BAD_SENT_COMMENT:
      return Object.assign({}, state, {
        isBadSentComment: action.payload,
      });
    case ActionType.SET_IS_COMMENT_SENT:
      return Object.assign({}, state, {
        isCommentSent: action.payload,
      });
  }
  return state;
};

export {reducer, ActionCreator, ActionType, Operation, State, initialState};
