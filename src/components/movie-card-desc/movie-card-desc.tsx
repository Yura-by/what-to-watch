import * as React from 'react';
import {connect} from 'react-redux';

import {Operation} from '../../reducer/data/data';

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
  onReviewsClick: (id: number) => void;
}

class MovieCardDesc extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      navigation: Navigation.overview
    };

    this._getScreen = this._getScreen.bind(this);
    this._navigationClickHandler = this._navigationClickHandler.bind(this);
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

  private _navigationClickHandler(name: Navigation) {
    const {onReviewsClick} = this.props;
    if (name === Navigation.reviews) {
      onReviewsClick(this.props.movie.id);
    }
    this.setState({
      navigation: name
    });
  }

  render() {
    return (
      <div className="movie-card__desc">
        <Navigator
          activeNav={this.state.navigation}
          onNavClick={this._navigationClickHandler}
        />
        {this._getScreen()}

      </div>
    );

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReviewsClick: (id: number) => {
      dispatch(Operation.loadComments(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(MovieCardDesc);
