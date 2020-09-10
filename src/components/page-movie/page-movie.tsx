import * as React from 'react';
import {Movie, Store} from '../../types';
import {Link, RouteComponentProps} from 'react-router-dom';
import {AppRoute} from '../../const';
import {connect} from 'react-redux';
import {getAllMovies} from '../../reducer/data/selectors';

import Header from '../header/header';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import MovieCardDesc from '../movie-card-desc/movie-card-desc';
import PageContent from '../page-content/page-content';
import CatalogLikeThis from '../catalog-like-this/catalog-like-this';

import withAddFavorites from '../../hocs/with-add-favorites/with-add-favorites';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  movies: Movie[];
}

const WithAddFavorites = withAddFavorites(MovieCardButtons);

const PageMovie: React.FunctionComponent<Props> = (props: Props) => {
  const {movies, match, history} = props;
  const movie = movies.find((it) => it.id === Number(match.params.id));
  if (!movie) {
    return null;
  }
  return (
    <React.Fragment>
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

              <WithAddFavorites
                history={history}
                movieId={movie.id}
                isFavorite={movie.isFavorite}
              >
                <Link to={`${AppRoute.ADD_COMMENT}${movie.id}`} className="btn movie-card__button">Add review</Link>
              </WithAddFavorites>

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
      <PageContent>
        <CatalogLikeThis />
      </PageContent>
    </React.Fragment>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    movies: getAllMovies(state),
  };
};

export default connect(mapStateToProps)(PageMovie);
