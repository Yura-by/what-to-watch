import * as React from 'react';
import {Movie} from '../../types';

import SmallMovieCard from '../small-movie-card/small-movie-card';

interface Props {
  movies: Movie[];
  onCardClick: (id: number) => void;
}

interface State {
  hoverMovie: number;
}

export default class MoviesList extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      hoverMovie: null
    };

    this._hoverCardHandler = this._hoverCardHandler.bind(this);
    this._leaveCardHandler = this._leaveCardHandler.bind(this);
  }

  private _hoverCardHandler(id: number): void {
    this.setState({
      hoverMovie: id
    });
  }

  private _leaveCardHandler(): void {
    this.setState({
      hoverMovie: null
    });
  }

  render() {
    const {movies, onCardClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((it) => {
          return (
            <SmallMovieCard
              movie={it}
              onCardClick={onCardClick}
              onCardHover={this._hoverCardHandler}
              onCardLeave={this._leaveCardHandler}
              key={it.id}
            />
          );
        })}
      </div>
    );
  }
}
