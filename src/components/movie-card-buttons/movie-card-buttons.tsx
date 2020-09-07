import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

interface Props {
  children?: React.ReactNode;
  movieId: number
}

const MoviCardButtons: React.FunctionComponent<Props> = (props: Props) => {
  const {movieId} = props;
  return (
    <div className="movie-card__buttons">
      <Link to={`${AppRoute.PLAYER}${movieId}`} className="btn btn--play movie-card__button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <Link to={`${AppRoute.FAVORITE}`} className="btn btn--list movie-card__button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </Link>
      {props.children}
    </div>
  );
};

export default MoviCardButtons;
