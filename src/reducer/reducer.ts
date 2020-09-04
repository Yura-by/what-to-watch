import {combineReducers} from 'redux';

import {NameSpace} from '../reducer/name-space';
import {reducer as data} from './data/data';
import {reducer as user} from './user/user';
import {reducer as app} from './app-state/app-state';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.APP]: app,
});
