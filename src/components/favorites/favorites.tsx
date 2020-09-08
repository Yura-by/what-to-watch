import * as React from 'react';
import {Movie, Store} from '../../types';
import Logo from '../logo/logo';
import {getUserAvatar} from '../../reducer/user/selectors';
import {connect} from 'react-redux';
import {URL} from '../../const';
import {Operation as DataOperation, Operation} from '../../reducer/data/data';

import {getFavoriteMovies} from '../../reducer/data/selectors';

import withPlayingMovie from '../../hocs/with-playing-movie/with-playing-movie';

import MoviesList from '../movies-list/movies-list';
import Footer from '../footer/footer';

interface Props {
  avatar: string;
  movies: Movie[];
  onComponentDidMount: () => void;
}

const MoviesListWrapped = withPlayingMovie(MoviesList);

class Favorites extends React.PureComponent<Props, null> {
  render() {
    const {avatar, movies} = this.props;
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src={`${URL.DOMEN}${avatar}`} alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MoviesListWrapped
            movies={movies}
          />
        </section>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.props.onComponentDidMount();
  }
}

const mapStateToProps = (state: Store) => {
  return {
    avatar: getUserAvatar(state),
    movies: getFavoriteMovies(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentDidMount: () => {
      dispatch(DataOperation.loadFavorites());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);


