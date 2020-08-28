import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Movies} from '../../mock/movies';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {Genre} from '../../const';

import PageMain from './page-main';

const mockStore = configureStore([]);

const store = mockStore({
  allMovies: Movies,
  genre: Genre.ALL_GENRES
});

it(`PageMain snapshot test`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <PageMain
        allMovies={Movies}
        onSelectMovie={jest.fn()}
      />
    </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
