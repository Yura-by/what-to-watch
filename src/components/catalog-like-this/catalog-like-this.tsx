import * as React from 'react';
import {Movie, Store} from '../../types';
import {connect} from 'react-redux';

import {getLikeThisMovies} from '../../reducer/app-state/selectors';

import MoviesList from '../movies-list/movies-list';

import withPlayingMovie from '../../hocs/with-playing-movie/with-playing-movie';

interface Props {
  movies: Movie[];
}

const MoviesListWrapped = withPlayingMovie(MoviesList);

const Catalog: React.FunctionComponent<Props> = (props: Props) => {
  const {movies} = props;
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <MoviesListWrapped
        movies={movies}
      />

    </section>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    movies: getLikeThisMovies(state)
  };
}


export default connect(mapStateToProps)(Catalog);
