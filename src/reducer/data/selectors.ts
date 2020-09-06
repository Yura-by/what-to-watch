import {Store} from '../../types';
import {NameSpace} from '../name-space';
import { createSelector } from 'reselect';
import { number } from 'prop-types';

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

export {getAllMovies, getReviews, getIsSendingComment, getIsBadSentComment, geIsCommentSent, getRandomMovie};
