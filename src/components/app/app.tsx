import * as React from 'react';
import {Movie, Store} from '../../types';
import {connect} from 'react-redux';

import {getAllMovies} from '../../reducer/data/selectors';

import PageMain from '../page-main/page-main';
import PageMovie from '../page-movie/page-movie';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';

import withLogIn from '../../hocs/with-log-in/with-log-in';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import withComment from '../../hocs/with-comment/with-comment';

import {getRequireAuthorization} from '../../reducer/user/selectors';

const PlayerWrapped = withVideoPlayer(Player);

const SignInWrapped = withLogIn(SignIn);

const AddReviewWrapped = withComment(AddReview);

interface State {
  playingFilm: Movie;
  selectedFilm: Movie;
}

interface Props {
  movies: Movie[];
  requireAuthorization: boolean;
}

class App extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      playingFilm: null,
      selectedFilm: null,
    };
  }

  render() {
    return <AddReviewWrapped />;

    if (this.props.requireAuthorization) {
      return <SignInWrapped />;
    }
    // return <AddReviewWrapped />

    if (this.state.playingFilm) {

      return <PlayerWrapped
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

    if (this.props.movies.length === 0) {
      return null;
    }

    return <PageMain
      allMovies={this.props.movies}
      onSelectMovie={(movie: Movie): void => {
        this.setState({selectedFilm: movie});
      }}
    />;
  }
}

const mapStateToProps = (state: Store) => {
  return {
    movies: getAllMovies(state),
    requireAuthorization: getRequireAuthorization(state),
  };
};

export default connect(mapStateToProps)(App);
