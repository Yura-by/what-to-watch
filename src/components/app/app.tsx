import * as React from 'react';
import {Movie} from '../../types';

import {Movies} from '../../mock/movies';

import PageMain from '../page-main/page-main';
import VideoPlayer from '../video-player/video-player';
import PageMovie from '../page-movie/page-movie';

interface State {
  playingFilm: Movie;
  selectedFilm: Movie;
}

export default class App extends React.PureComponent<{}, State> {
  constructor(props) {
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
        movies={Movies}
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
      allMovies={Movies}
      onSelectMovie={(movie: Movie): void => {
        this.setState({selectedFilm: movie});
      }}
    />;
  }
}
