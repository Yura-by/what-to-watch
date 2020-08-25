import * as React from 'react';
import {Movie} from '../../types';

import Header from '../header/header';
import MoviCardButtons from '../movie-card-buttons/movie-card-buttons';

interface Props {
  movie: Movie;
}

const MovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {movie} = props;
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={movie.backgroundImage} alt={movie.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movie.genre}</span>
              <span className="movie-card__year">{movie.released}</span>
            </p>
            <MoviCardButtons
              onPlay={() => {
                event.preventDefault();
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
