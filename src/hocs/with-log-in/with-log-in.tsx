import * as React from 'react';
import {Subtract} from 'utility-types';
import {connect} from 'react-redux';

import {Operation} from '../../reducer/user/user';

import {getRequestStatus, getRequireAuthorization} from '../../reducer/user/selectors';

interface State {
  email: string;
  password: string;
}

interface Props {
  isBadRequest: boolean;
  onFormSubmit: (state: State) => void;
  isRequireAuthorization: boolean;
}

interface InjectedProps {
  logIn: string;
  onLoginChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  onPasswordChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onSendForm: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const withLogIn = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;

  class WithLogIn extends React.PureComponent<T, State> {
    constructor(props: T) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this._loginChangeHandler = this._loginChangeHandler.bind(this);
      this._passwordChangeHandler = this._passwordChangeHandler.bind(this);
      this._formSendHandler = this._formSendHandler.bind(this);
    }

    private _loginChangeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
      this.setState({
        email: evt.target.value
      });
    }

    private _passwordChangeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
      this.setState({
        password: evt.target.value
      });
    }

    private _formSendHandler(evt: React.FormEvent<HTMLFormElement>) {
      evt.preventDefault();
      this.props.onFormSubmit(this.state);
    }

    render() {
      const {history} = this.props;
      console.log(history)
      if (!this.props.isRequireAuthorization) {
        history.go(-1);
      }
      return <Component
        logIn={this.state.email}
        onLoginChange={this._loginChangeHandler}
        password={this.state.password}
        onPasswordChange={this._passwordChangeHandler}
        onSendForm={this._formSendHandler}
        isBadEmail={this.props.isBadRequest}
      />;
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithLogIn);
};

const mapStateToProps = (state) => {
  return {
    isBadRequest: getRequestStatus(state),
    isRequireAuthorization: getRequireAuthorization(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (data: State) => {
      dispatch(Operation.signIn(data));
    }
  };
};

export default withLogIn;
