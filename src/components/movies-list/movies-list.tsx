import * as React from 'react';
import {Movie} from '../../types';

import SmallMovieCard from '../small-movie-card/small-movie-card';

interface Props {
  movies: Movie[];
  onCardClick: (id: number) => void;
}

interface State {
  hoverMovie: number;
  timerId: NodeJS.Timeout
}

export default class MoviesList extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      hoverMovie: null,
      timerId: null,
    };

    this._hoverCardHandler = this._hoverCardHandler.bind(this);
    this._leaveCardHandler = this._leaveCardHandler.bind(this);
  }

  private _hoverCardHandler(id: number): void {
    const timer = setInterval(() => {
      this.setState({
        hoverMovie: id,
      });
    }, 1000);
    this.setState({
      timerId: timer
    });
  }

  private _leaveCardHandler(): void {
    if (this.state.timerId) {
      clearTimeout(this.state.timerId)
    }
    this.setState({
      hoverMovie: null
    });
  }

  render() {
    const {movies, onCardClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((it, index) => {
          return (
            <SmallMovieCard
              movie={it}
              onCardClick={onCardClick}
              onCardHover={this._hoverCardHandler}
              onCardLeave={this._leaveCardHandler}
              key={it.id}
              isPlayVideo={this.state.hoverMovie === index}
            />
          );
        })}
      </div>
    );
  }
}
