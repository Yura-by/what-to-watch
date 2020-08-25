import * as React from 'react';

import {Navigation} from '../../const';
import {Movie} from '../../types';

import Navigator from '../navigator/navigatior';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';

interface State {
  navigation: Navigation;
}

interface Props {
  movie: Movie;
}

export default class MovieCardDesc extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      navigation: Navigation.overview
    };

    this._getScreen = this._getScreen.bind(this);
  }

  private _getScreen() {
    const {movie} = this.props;

    switch (this.state.navigation) {
      case Navigation.overview:
        return <MovieOverview movie={movie} />;
      case Navigation.details:
        return <MovieDetails movie={movie} />;
      case Navigation.reviews:
        return <MovieReviews />;
    }

    return null;

  }

  render() {
    return (
      <div className="movie-card__desc">
        <Navigator
          activeNav={this.state.navigation}
          onNavClick={(name: Navigation) => {
            this.setState({
              navigation: name
            });
          }}
        />
        {this._getScreen()}

      </div>
    );

  }
}
