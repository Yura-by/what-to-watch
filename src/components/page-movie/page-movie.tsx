import * as React from 'react';
import {Movie} from '../../types';

import Header from '../header/header';
import MoviCardButtons from '../movie-card-buttons/movie-card-buttons';
import MovieCardDesc from '../movie-card-desc/movie-card-desc';

interface Props {
  movie: Movie;
  movies: Movie[];
  onMoviePlay: () => void;
}

export default class PageMovie extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);

  }

  render() {
    const {movie, onMoviePlay} = this.props;
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.released}</span>
              </p>

              <MoviCardButtons
                onPlay={onMoviePlay}
              >
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </MoviCardButtons>

            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
            </div>

            <MovieCardDesc movie={movie}/>

          </div>
        </div>
      </section>
    );
  }
}
