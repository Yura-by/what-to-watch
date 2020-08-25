import * as React from 'react';
import {Movie} from '../../types';

import MoviesList from '../movies-list/movies-list';

interface Props {
  movies: Movie[];
  onCardClick: (movie: Movie) => void;
}

const Catalog: React.FunctionComponent<Props> = (props: Props) => {
  const {movies, onCardClick} = props;
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <MoviesList
        movies={movies.slice(0, 4)}
        onCardClick={onCardClick}
      />

    </section>
  );
};

export default Catalog;