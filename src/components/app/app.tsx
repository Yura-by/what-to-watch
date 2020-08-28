import * as React from 'react';
import {Movie} from '../../types';

import PageMain from '../page-main/page-main';
import VideoPlayer from '../video-player/video-player';
import PageMovie from '../page-movie/page-movie';

interface State {
  playingFilm: Movie;
  selectedFilm: Movie;
}

interface Props {
  movies: Movie[];
}

export default class App extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      playingFilm: null,
      selectedFilm: null,
    };
  }

  render() {
    if (this.state.playingFilm) {
      return <VideoPlayer
        movie={this.state.playingFilm}
        onExitPlayer={() => {
          this.setState({playingFilm: null});
          this.setState({selectedFilm: null});
        }}
      />;
    }

    if (this.state.selectedFilm) {
      return <PageMovie
        movie={this.state.selectedFilm}
        movies={this.props.movies}
        onMoviePlay={() => {
          this.setState((prevState) => {
            return {
              playingFilm: prevState.selectedFilm
            };
          });
        }}
        onSelectMovie={(movie: Movie): void => {
          this.setState({selectedFilm: movie});
        }}
      />;
    }

    return <PageMain
      allMovies={this.props.movies}
      onSelectMovie={(movie: Movie): void => {
        this.setState({selectedFilm: movie});
      }}
    />;
  }
}
