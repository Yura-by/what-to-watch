import {Movie, Action, Comment, SendingComment} from '../../types';
import MovieAdapter from '../../adapters/movie';
import {NameSpace} from '../name-space';

enum ActionType {
  SET_MOVIES = `SET_MOVIES`,
  SET_COMMENTS = `SET_COMMENTS`,
  SET_IS_SENDING_COMMENT = `SET_IS_SENDING_COMMENT`,
  SET_IS_BAD_SENT_COMMENT = `SET_IS_BAD_SENT_COMMENT`,
  SET_IS_COMMENT_SENT = `SET_IS_COMMENT_SENT`,
  SET_PROMO_MOVIE = `SET_PROMO_MOVIE`,
  SET_FAVORITE_MOVIES = `SET_FAVORITE_MOVIES`,
  SET_MOVIE = `SET_MOVIE`,
  SET_FAVORITE_SENDING = `SET_FAVORITE_SENDING`,
  SET_FAVORITE_PROMO = `SET_FAVORITE_PROMO`,
}

interface State {
  allMovies: Movie[];
  comments: Comment[];
  promoMovie: Movie;
  isSendingComment: boolean;
  isBadSentComment: boolean;
  isCommentSent: boolean;
  favoriteMovies: Movie[];
  isFavoriteSending: boolean;
}

const initialState: State = {
  allMovies: [],
  comments: [],
  promoMovie: null,
  isSendingComment: false,
  isBadSentComment: false,
  isCommentSent: false,
  favoriteMovies: [],
  isFavoriteSending: false,
};

const ActionCreator = {

  setPromoMovie: (movie: Movie) => {
    return {
      type: ActionType.SET_PROMO_MOVIE,
      payload: movie,
    };
  },

  setFavoriteMovies: (movies: Movie[]) => {
    return {
      type: ActionType.SET_FAVORITE_MOVIES,
      payload: movies,
    };
  },

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
  },

  setMovie: (movie: Movie) => ({
    type: ActionType.SET_MOVIE,
    payload: movie,
  }),

  setFavoriteSending: (isSanding: boolean) => {
    return {
      type: ActionType.SET_FAVORITE_SENDING,
      payload: isSanding,
    };
  },

  toggleFavoriePromoMovie: (isFavorite: boolean) => {
    return {
      type: ActionType.SET_FAVORITE_PROMO,
      payload: isFavorite
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
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.setFavoriteMovies(MovieAdapter.getMovies(response.data)));
      })
  },

  setFavorite: (id: number, isFavorite: boolean, isPromo: boolean) => (dispatch, getState, api) => {
    if (isPromo) {
      return dispatch(ActionCreator.toggleFavoriePromoMovie(isFavorite));
    }
    dispatch(ActionCreator.setFavoriteSending(true));
    const isFavoriteMovie: number = isFavorite ? 1 : 0;
    return api.post(`/favorite/${id}/${isFavoriteMovie}`)
      .then((response) => {
        dispatch(ActionCreator.setMovie(MovieAdapter.getMovie(response.data)));
        dispatch(ActionCreator.setFavoriteSending(false));
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
  },

  loadPromoMovie: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFavoriteSending(true));
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.setFavoriteSending(false));
        dispatch(ActionCreator.setPromoMovie(MovieAdapter.getMovie(response.data)));

      });
  },
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
    case ActionType.SET_PROMO_MOVIE:
      return Object.assign({}, state, {
        promoMovie: action.payload
      });
    case ActionType.SET_FAVORITE_MOVIES:
      return Object.assign({}, state, {
        favoriteMovies: action.payload
      });
    case ActionType.SET_MOVIE:
      const movie: Movie = action.payload;
      const movies: Movie[] = state.allMovies;
      const index: number = movies.findIndex((it) => it.id === movie.id);
      const newMovies = [].concat(movies.slice(0, index), movie, movies.slice(index + 1));
      return Object.assign({}, state, {
        allMovies: newMovies,
      });
    case ActionType.SET_FAVORITE_SENDING:
      return Object.assign({}, state, {
        isFavoriteSending: action.payload
      })
    case ActionType.SET_FAVORITE_PROMO:
      const copyPromoMovie = Object.assign({}, state.promoMovie, {
        isFavorite: action.payload,
      });
      return Object.assign({}, state, {
        promoMovie: copyPromoMovie,
      });
  }
  return state;
};

export {reducer, ActionCreator, ActionType, Operation, State, initialState};
