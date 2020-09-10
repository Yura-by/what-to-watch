import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';

import PageMain from '../page-main/page-main';
import PageMovie from '../page-movie/page-movie';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../favorites/favorites';

import withLogIn from '../../hocs/with-log-in/with-log-in';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import withComment from '../../hocs/with-comment/with-comment';

const PlayerWrapped = withVideoPlayer(Player);

const SignInWrapped = withLogIn(SignIn);

const AddReviewWrapped = withComment(AddReview);

const App = () => {
  return (
    <Switch>
      <Route
        path={AppRoute.ROOT}
        exact
        component={PageMain}
      />
      <Route
        path={AppRoute.LOGIN}
        exact
        component={SignInWrapped}
      />
      <Route
        path={`${AppRoute.MOVIE}:id`}
        exact
        component={PageMovie}
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
      <PrivateRoute
        path={AppRoute.FAVORITES}
        exact={true}
        component={Favorites}
      />

    </Switch>
  );
};

export default App;
