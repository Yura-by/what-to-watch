import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '../../types';
import {AppRoute} from '../../const';
import {Subtract} from 'utility-types';

import {Operation as DataOperation} from '../../reducer/data/data';

import {getRequireAuthorization} from '../../reducer/user/selectors';
import {getIsFavoriteSending} from '../../reducer/data/selectors';


interface Props {
  isRequireAuthorization: boolean;
  isFavoriteSending: boolean;
  isFavorite: boolean;
  history: any;
  movieId: number;
  onMyListClick: (id: number, isFavorite: boolean, isPromo: boolean) => void;
  isPromo?: boolean;
}

interface InjectingProps {
  isMyListDisabled: boolean;
  onFavoriteClick: (id: number, isFavorite: boolean) => void;
}

const withAddFavorites = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectingProps>;

  class WithAddFavorites extends React.PureComponent<T, null> {
    constructor(props: Props) {
      super(props);

      this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    }

    private _favoriteClickHandler(isFavorite: boolean) {
      if (this.props.isRequireAuthorization) {
        this.props.history.push(AppRoute.LOGIN);
        return;
      }
      this.props.onMyListClick(this.props.movieId, isFavorite, this.props.isPromo);
    }

    render() {
      return (
        <Component
          {...this.props}
          isMyListDisabled={this.props.isFavoriteSending}
          onFavoriteClick={this._favoriteClickHandler}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithAddFavorites);
};

const mapStateToProps = (state: Store) => {
  return {
    isRequireAuthorization: getRequireAuthorization(state),
    isFavoriteSending: getIsFavoriteSending(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMyListClick: (id: number, isFavorite: boolean, isPromo: boolean = false) => {
      dispatch(DataOperation.setFavorite(id, isFavorite, isPromo));
    }
  }
}

export default withAddFavorites;
