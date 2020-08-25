import * as React from 'react';
import {Movie} from '../../types';

interface Props {
  movie: Movie;
}

const MovieOverview: React.FunctionComponent<Props> = (props: Props) => {
  const {movie} = props;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{movie.description}</p>

        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

export default MovieOverview;
