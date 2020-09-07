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
import PrivateRoute from '../private-route/private-route';

import withLogIn from '../../hocs/with-log-in/with-log-in';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import withComment from '../../hocs/with-comment/with-comment';

const PlayerWrapped = withVideoPlayer(Player);

const SignInWrapped = withLogIn(SignIn);

const AddReviewWrapped = withComment(AddReview);


interface Props {
  movies: Movie[];
}

const App: React.FunctionComponent<Props> = (props: Props) => {
    return (
      <Switch>
        <Route
          path={AppRoute.ROOT}
          exact
          render={() => {
            return <PageMain />
          }}
        />
        <Route
          path={AppRoute.LOGIN}
          exact
          component={SignInWrapped}
        />
        <Route
          path={`${AppRoute.MOVIE}:id`}
          exact
          render={(routersProps) => {
            return (
              <PageMovie
                {...routersProps}
                movies={props.movies}
              />
            );
          }}
        />
        <Route
          path={`${AppRoute.PLAYER}:id`}
          exact
          component={PlayerWrapped}
        />
        <PrivateRoute
          path={`${AppRoute.ADD_COMMENT}:id`}
          exact={true}
          component={AddReviewWrapped}
        />

      </Switch>
    );
};

const mapStateToProps = (state: Store) => {
  return {
    movies: getAllMovies(state),
  };
};

export default connect(mapStateToProps)(App);
