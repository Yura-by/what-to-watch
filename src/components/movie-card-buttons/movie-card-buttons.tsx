import * as React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';

interface Props {
  children?: React.ReactNode;
  movieId: number;
  isFavorite: boolean;
}

const MoviCardButtons: React.FunctionComponent<Props> = (props: Props) => {
  const {movieId, isFavorite} = props;
  return (
    <div className="movie-card__buttons">
      <Link to={`${AppRoute.PLAYER}${movieId}`} className="btn btn--play movie-card__button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <button type="button" className="btn btn--list movie-card__button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={isFavorite ? `#in-list` : `#add`}></use>
        </svg>
        <span>My list</span>
      </button>
      {props.children}
    </div>
  );
};


export default MoviCardButtons;
