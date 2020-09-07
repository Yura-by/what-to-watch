import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Store} from '../../types';
import {AppRoute} from '../../const';


import {getRequireAuthorization} from '../../reducer/user/selectors';

interface Props {
  component: any,
  isRequireAuthorization: boolean,
  exact: boolean,
  path: string,
}

const PrivateRoute: React.FunctionComponent<Props> = ({component: Component, isRequireAuthorization, ...rest}: Props) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isRequireAuthorization ? <Redirect to={AppRoute.LOGIN} /> : <Component {...props} />;
      }}
    />
  );
};

const mapStateToProps = (state: Store) => {
  return {
    isRequireAuthorization: getRequireAuthorization(state),
  };
};

export default connect(mapStateToProps)(PrivateRoute);
