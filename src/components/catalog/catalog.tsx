import * as React from 'react';
import {Movie} from '../../types';

import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';

interface Props {
  movies: Movie[];
  onCardClick: (movie: Movie) => void;
  children: React.ReactNode;
}

const Catalog: React.FunctionComponent<Props> = (props: Props) => {
  const {movies, onCardClick} = props;
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />

        <MoviesList
          movies={movies}
          onCardClick={onCardClick}
        />

        <div className="catalog__more">
          {props.children}
        </div>
      </section>
    );
}

export default Catalog;
