import {Store} from '../../types';
import {NameSpace} from '../name-space';

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

export {getAllMovies, getReviews, getIsSendingComment, getIsBadSentComment, geIsCommentSent};
