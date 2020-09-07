import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

import {Movie} from '../../types';

interface Props {
  movie: Movie;
  onCardHover: (id: number) => void;
  onCardLeave: () => void;
  isPlayVideo: boolean;
}

const SmallMovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {movie, onCardHover, onCardLeave, isPlayVideo} = props;
  return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => {
          onCardHover(movie.id);
        }}
        onMouseLeave={onCardLeave}
      >
        <div className="small-movie-card__image">
          {isPlayVideo ? <video src={movie.previewVideoLink} width="280" height="175" poster={movie.posterImage} muted autoPlay></video>
            : <img src={movie.previewImage} alt={movie.name} width="280" height="175" />}

        </div>
        <h3 className="small-movie-card__title">
        <Link
          to={`${AppRoute.MOVIE}${movie.id}`}
          className="small-movie-card__link"
        >
          {movie.name}
        </Link>

        </h3>
      </article>
  );
};

export default SmallMovieCard;
