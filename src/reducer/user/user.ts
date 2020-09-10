import User from '../../adapters/user';
import {history} from '../../index';
import {AppRoute} from '../../const'

enum ActionType {
  SET_REQUIRE_AUTHORIZATION = `SET_REQUIRE_AUTHORIZATION`,
  SET_USER_DATA = `SET_USER_DATA`,
  SET_REQUEST_FLAG = `SET_REQUEST_FLAG`,
}

interface Data {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
}

interface State {
  isRequireAuthorization: boolean;
  data: Data;
  isBadRequest: boolean;
}

const initialState: State = {
  isRequireAuthorization: false,
  data: null,
  isBadRequest: false,
};

const ActionCreator = {
  setRequireAuthorization: (isRequire: boolean) => {
    return {
      type: ActionType.SET_REQUIRE_AUTHORIZATION,
      payload: isRequire
    };
  },

  setRequestFlag: (isBad: boolean) => {
    return {
      type: ActionType.SET_REQUEST_FLAG,
      payload: isBad
    }
  },

  setUserData: (userData) => {
    return {
      type: ActionType.SET_USER_DATA,
      payload: userData
    }
  }
};

interface userData {
  email: string;
  password: string;
}

const Operation = {
  checkLogin: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setUserData(new User(response.data)));
        dispatch(ActionCreator.setRequireAuthorization(false));
      })
      .catch(() => dispatch(ActionCreator.setRequireAuthorization(true)))
  },

  signIn: (userData: userData) => (dispatch, getState, api) => {
    return api.post(`/login`, userData)
      .then((response) => {
        dispatch(ActionCreator.setUserData(new User(response.data)));
        dispatch(ActionCreator.setRequireAuthorization(false));
        dispatch(ActionCreator.setRequestFlag(false));
        history.push(AppRoute.ROOT);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          dispatch(ActionCreator.setRequestFlag(true));
        }
      })
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isRequireAuthorization: action.payload
      });
    case ActionType.SET_REQUEST_FLAG:
      return Object.assign({}, state, {
        isBadRequest: action.payload
      });
    case ActionType.SET_USER_DATA:
      return Object.assign({}, state, {
        data: action.payload
      });
  }

  return state;
};

export {ActionType, ActionCreator, reducer, Operation, initialState};
