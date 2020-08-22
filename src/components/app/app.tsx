import * as React from 'react';
import PageMain from '../page-main/page-main';
import VideoPlayer from '../video-player/video-player';
import {Movie} from '../../types';

import {Movies} from '../../mock/movies';

interface State {
  playingFilm: Movie;
}

export default class App extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      playingFilm: null
    }
  }

  render() {
    if (this.state.playingFilm) {
      return <VideoPlayer
        movie={this.state.playingFilm}
        onExitPlayer={() => {
          this.setState({playingFilm: null})
        }}
      />
    }

    return <PageMain
      allMovies={Movies}
      onSelectMovie={(movie: Movie): void => {
        this.setState({playingFilm: movie});
      }}
    />
  }
}
