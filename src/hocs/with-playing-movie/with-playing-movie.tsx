import * as React from 'react';
import {Subtract} from 'utility-types';

interface State {
  hoverMovie: number;
  timerId: ReturnType<typeof setTimeout>;
}

interface InjectedProps {
  onCardHover: (id: number) => void;
  onCardLeave: () => void;
  playingPlayer: number;
}

const withPlayingMovie = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithPlayingMovie extends React.PureComponent<T, State> {

    constructor(props: T) {
      super(props);

      this.state = {
        hoverMovie: null,
        timerId: null,
      };

      this._hoverCardHandler = this._hoverCardHandler.bind(this);
      this._leaveCardHandler = this._leaveCardHandler.bind(this);
    }

    private _hoverCardHandler(id: number): void {
      const timer = setTimeout(() => {
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
        clearTimeout(this.state.timerId);
      }
      this.setState({
        hoverMovie: null
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onCardHover={this._hoverCardHandler}
          onCardLeave={this._leaveCardHandler}
          playingPlayer={this.state.hoverMovie}
        />
      );
    }

    componentWillUnmount() {
      if (this.state.timerId) {
        clearTimeout(this.state.timerId);
      }
    }
  }

  return WithPlayingMovie;
};

export default withPlayingMovie;
