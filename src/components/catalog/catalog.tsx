import * as React from 'react';
import {Movie} from '../../types';

import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';

import withPlayingMovie from '../../hocs/with-playing-movie/with-playing-movie';

const MoviesListWrapped = withPlayingMovie(MoviesList);

interface Props {
  movies: Movie[];
  children: React.ReactNode;
}

const Catalog: React.FunctionComponent<Props> = (props: Props) => {
  const {movies} = props;
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <MoviesListWrapped
        movies={movies}
      />

      <div className="catalog__more">
        {props.children}
      </div>
    </section>
  );
};

export default Catalog;
