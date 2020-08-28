import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

import {Movies} from './mock/movies';
import {ActionCreator} from './reducer/reducer';

import App from './components/app/app';

import {reducer} from './reducer/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

store.dispatch(ActionCreator.setMovies(Movies));

ReactDOM.render(<Provider store={store}>
  <App
    movies={Movies}
  />
</Provider>, document.getElementById(`root`));
