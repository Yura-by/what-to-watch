import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';
import {AppRoute} from './const';

import createAPI from './api';
import reducer from './reducer/reducer';
import {Operation as DataOperation} from './reducer/data/data';
import {Operation as UserOperation} from './reducer/user/user';

import App from './components/app/app';

const history = createBrowserHistory();

const onRequireAuth = () => {
  store.dispatch(() => history.push(AppRoute.LOGIN));
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
  <Router history={history}>
    <App />
  </Router>
</Provider>, document.getElementById(`root`));
