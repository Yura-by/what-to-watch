import {createSelector} from 'reselect';

import {Store} from '../../types';
import {NameSpace} from './../name-space';

import {getAllMovies} from '../data/selectors'

import {getUniqItems} from '../../utils';
import {Genre} from '../../const';
import {Movie} from '../../types';

const getActiveGenre = (state: Store) => {
  return state[NameSpace.APP].genre;
};

const getAllGenres = createSelector(
  getAllMovies,
  (movies) => {
    const allGenres: string[] = movies.map((it) => it.genre);
    return getUniqItems<string>(allGenres);
  }
);

const getMoviesByType = createSelector(
  getActiveGenre,
  getAllMovies,
  (genre: string, allMovies: Movie[]) => {
    if (genre === Genre.ALL_GENRES) {
      return allMovies;
    }
    return allMovies.filter((it) => it.genre === genre);
  }
);

const getSelectedMovieId = (state: Store) => {
  return state[NameSpace.APP].selectedMovie;
};

const getSelectedMovie = createSelector(
  getSelectedMovieId,
  getAllMovies,
  (id, movies) => {
    return movies.find((it) => it.id === id);
  }
)

export {getAllGenres, getAllMovies, getActiveGenre, getMoviesByType, getSelectedMovieId, getSelectedMovie};

