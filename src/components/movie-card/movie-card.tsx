import * as React from 'react';
import {Movie} from '../../types';
import {connect} from 'react-redux';
import {getPromoMovie} from '../../reducer/data/selectors';

import Header from '../header/header';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import withAddFavorites from '../../hocs/with-add-favorites/with-add-favorites';
import {Store} from '../../types';

interface Props {
  movie: Movie;
  history: any;
}

const WithAddFavorites = withAddFavorites(MovieCardButtons)

const MovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {movie, history} = props;
  if (movie === null) {
    return null;
  }
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
            <WithAddFavorites
              history={history}
              movieId={movie.id}
              isFavorite={movie.isFavorite}
              isPromo={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    movie: getPromoMovie(state),
  };
};

export default connect(mapStateToProps)(MovieCard);
