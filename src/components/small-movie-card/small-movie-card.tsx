import * as React from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/app-state/app-state';

import {Movie} from '../../types';

interface Props {
  movie: Movie;
  // onCardClick: (movie: Movie) => void;
  onCardHover: (id: number) => void;
  onCardLeave: () => void;
  isPlayVideo: boolean;
  onMovieClick: (id: number) => void;
}

const SmallMovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {movie, onCardHover, onCardLeave, isPlayVideo, onMovieClick} = props;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onCardHover(movie.id);
      }}
      onMouseLeave={onCardLeave}
      onClick={(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        evt.preventDefault();
        onMovieClick(movie.id);
      }}
    >
      <div className="small-movie-card__image">
        {isPlayVideo ? <video src={movie.previewVideoLink} width="280" height="175" poster={movie.posterImage} muted autoPlay></video>
          : <img src={movie.previewImage} alt={movie.name} width="280" height="175" />}

      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >{movie.name}</a>
      </h3>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMovieClick: (id: number) => {
      dispatch(ActionCreator.setSelectedMovie(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(SmallMovieCard);
