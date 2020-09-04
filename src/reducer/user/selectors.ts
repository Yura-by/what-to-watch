import {createSelector} from 'reselect';

import {NameSpace} from '../name-space';
import {Store} from '../../types';

export const getRequestStatus = (state: Store) => {
  return state[NameSpace.USER].isBadRequest;
};

export const getRequireAuthorization = (state: Store) => {
  return state[NameSpace.USER].isRequireAuthorization;
};

export const getUserData = (state: Store) => {
  return state[NameSpace.USER].data;
};

export const getUserAvatar = createSelector(
  getUserData,
  (data) => {
    if (data) {
      return data.avatarUrl;
    }

    return ``;
  }
)
