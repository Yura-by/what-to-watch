import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Store} from '../../types';

import {getRequireAuthorization} from '../../reducer/user/selectors';


interface Props {
  isRequireAuthorization: boolean;
}

const withAddFavorites = (component) => {

  class WithAddFavorites extends React.PureComponent {
    constructor(props) {
      super(props);
    }
  }

  return connect(mapStateToProps)(WithAddFavorites);
};

const mapStateToProps = (state: Store) => {
  return {
    isRequireAuthorization: getRequireAuthorization(state),
  };
};

export default withAddFavorites;
