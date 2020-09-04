import * as React from 'react';
import {Subtract} from 'utility-types';
import {Movie, Store} from '../../types';
import {connect} from 'react-redux';

import {getMoviesByType} from '../../reducer/app-state/selectors';

import {Count} from '../../const';

import ShowMoreButton from '../../components/show-more-button/show-more-button';

interface State {
  moviesCount: number;
}

interface InjectingProps {
  onShowMoreClick: () => void;
}

interface Props {
  movies: Movie[];
}

const withMoreButton = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectingProps>;

  class WithMoreButton extends React.PureComponent<T, State> {
    constructor(props: T) {
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
      const {movies} = this.props;
      let moviesLength = this.state.moviesCount;
      if (moviesLength > movies.length) {
        moviesLength = movies.length;
      }
      const moviesByCount = movies.slice(0, moviesLength);
      return (
        <Component
          {...this.props}
          movies={moviesByCount}
        >
          {moviesLength === movies.length ? ``
            : <ShowMoreButton
              onShowMoreClick={this._moreButtonClickHandler}
            />
          }
        </Component>
      );
    }
  }


  const mapStateToProps = (state: Store) => {
    return {
      movies: getMoviesByType(state)
    };
  };

  return connect(mapStateToProps)(WithMoreButton);
};

export default withMoreButton;
