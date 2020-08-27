import {Store} from '../types';
import {createSelector} from 'reselect';

import {getUniqItems} from '../utils';
import {Genre} from '../const';
import {Movie} from '../types';

const getActiveGenre = (state: Store) => {
  return state.genre;
};

const getAllMovies = (state: Store) => {
  return state.allMovies;
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
)

export {getAllGenres, getAllMovies, getActiveGenre, getMoviesByType};
