import * as React from 'react';

import {Movie} from '../../types';

interface Props {
  movie: Movie;
  onCardClick: (id: number) => void;
  onCardHover: (id: number) => void;
  onCardLeave: () => void;
}

const SmallMovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {movie, onCardClick, onCardHover, onCardLeave} = props;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onCardHover(movie.id);
      }}
      onMouseLeave={onCardLeave}
    >
      <div className="small-movie-card__image">
        <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            evt.preventDefault();
            onCardClick(movie.id);
          }}
        >{movie.name}</a>
      </h3>
    </article>
  );
};

export default SmallMovieCard;
