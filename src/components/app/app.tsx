import * as React from 'react';
import {Movie, Store} from '../../types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';

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
  // constructor(props: Props) {
  //   super(props);

  //   this.state = {
  //     playingFilm: null,
  //     selectedFilm: null,
  //   };
  // }



  render() {
    return (
      <Switch>
        <Route
          path={AppRoute.ROOT}
          exact
          render={() => {
            return <PageMain allMovies={this.props.movies} />
          }}
        />
        <Route
          path={AppRoute.LOGIN}
          exact
          component={SignInWrapped}
        />
        <Route
          path={`${AppRoute.MOVIE}: id`}
          exact
          render={(props) => {
            return (
              <PageMovie
                {...props}
                movies={this.props.movies}
              />
            );
          }}
        />
      </Switch>
    );
  }

  //     <PageMovie
  //       movie={this.state.selectedFilm}
  //       movies={this.props.movies}
  //       onMoviePlay={() => {
  //         this.setState((prevState) => {
  //           return {
  //             playingFilm: prevState.selectedFilm
  //           };
  //         });
  //       }}
  //       onSelectMovie={(movie: Movie): void => {
  //         this.setState({selectedFilm: movie});
  //       }}
  //     />;

  // render() {
  //   return <AddReviewWrapped />;

  //   if (this.props.requireAuthorization) {
  //     return <SignInWrapped />;
  //   }
  //   // return <AddReviewWrapped />

  //   if (this.state.playingFilm) {

  //     return <PlayerWrapped
  //       movie={this.state.playingFilm}
  //       onExitPlayer={() => {
  //         this.setState({playingFilm: null});
  //         this.setState({selectedFilm: null});
  //       }}
  //     />;
  //   }

  //   if (this.state.selectedFilm) {
  //     return <PageMovie
  //       movie={this.state.selectedFilm}
  //       movies={this.props.movies}
  //       onMoviePlay={() => {
  //         this.setState((prevState) => {
  //           return {
  //             playingFilm: prevState.selectedFilm
  //           };
  //         });
  //       }}
  //       onSelectMovie={(movie: Movie): void => {
  //         this.setState({selectedFilm: movie});
  //       }}
  //     />;
  //   }

  //   if (this.props.movies.length === 0) {
  //     return null;
  //   }

  //   return <PageMain
  //     allMovies={this.props.movies}
  //     onSelectMovie={(movie: Movie): void => {
  //       this.setState({selectedFilm: movie});
  //     }}
  //   />;
  // }
}

const mapStateToProps = (state: Store) => {
  return {
    movies: getAllMovies(state),
    requireAuthorization: getRequireAuthorization(state),
  };
};

export default connect(mapStateToProps)(App);
