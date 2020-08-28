import * as React from 'react';
import {Movie, Store} from '../../types';
import {connect} from 'react-redux';

import {Count} from '../../const';

import {getMoviesByType} from '../../reducer/selectors';

import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';

interface Props {
  movies: Movie[];
  onCardClick: (movie: Movie) => void;
}

interface State {
  moviesCount: number;
}

class Catalog extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      moviesCount: Count.START
    };

    this._moreButtonClickHandler = this._moreButtonClickHandler.bind(this);
  }

  private _moreButtonClickHandler() {
    this.setState((prevState) => {
      return {
        moviesCount: prevState.moviesCount + Count.ADD
      };
    });
  }


  render() {
    const {movies, onCardClick} = this.props;
    let moviesLength = this.state.moviesCount;
    if (moviesLength > movies.length) {
      moviesLength = movies.length;
    }
    const moviesByCount = movies.slice(0, moviesLength);
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />

        <MoviesList
          movies={moviesByCount}
          onCardClick={onCardClick}
        />

        <div className="catalog__more">
          {moviesLength === movies.length ? ``
            : <button className="catalog__button" type="button"
              onClick={this._moreButtonClickHandler}
            >Show more</button>
          }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state: Store) => {
  return {
    movies: getMoviesByType(state)
  };
};

export default connect(mapStateToProps)(Catalog);
