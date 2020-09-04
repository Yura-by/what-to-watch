import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

import createAPI from './api';
import reducer from './reducer/reducer';
import {Operation as DataOperation} from './reducer/data/data';
import {Operation as UserOperation} from './reducer/user/user';
import {ActionCreator} from './reducer/user/user';

import App from './components/app/app';

const onRequireAuth = () => {
  store.dispatch(ActionCreator.setRequireAuthorization(true));
};
const api = createAPI(onRequireAuth);

const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadMovies());
store.dispatch(UserOperation.checkLogin());

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById(`root`));
