import {Store} from '../../types';
import {NameSpace} from '../name-space';
import { createSelector } from 'reselect';

const getAllMovies = (state: Store) => {
  return state[NameSpace.DATA].allMovies;
};

const getReviews = (state: Store) => {
  return state[NameSpace.DATA].comments;
};

const getIsSendingComment = (state: Store) => {
  return state[NameSpace.DATA].isSendingComment;
};

const getIsBadSentComment = (state: Store) => {
  return state[NameSpace.DATA].isBadSentComment;
};

const geIsCommentSent = (state: Store) => {
  return state[NameSpace.DATA].isCommentSent;
};

const getRandomMovie = createSelector(
  getAllMovies,
  (allMovies) => {
    if (allMovies.length === 0) {
      return null;
    }
    const randomNumber: number = Math.floor(Math.random() * allMovies.length);
    return allMovies[randomNumber];
  }
);

const getPromoMovie = (state: Store) => {
  return state[NameSpace.DATA].promoMovie;
};

const getFavoriteMovies = (state: Store) => {
  return state[NameSpace.DATA].favoriteMovies;
};

export {getAllMovies, getReviews, getIsSendingComment, getIsBadSentComment, geIsCommentSent, getRandomMovie, getPromoMovie, getFavoriteMovies};
