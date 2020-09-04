import {Store} from '../../types';
import {NameSpace} from '../name-space';

const getAllMovies = (state: Store) => {
  return state[NameSpace.DATA].allMovies;
};

const getReviews = (state: Store) => {
  return state[NameSpace.DATA].comments;
};

export {getAllMovies, getReviews};
