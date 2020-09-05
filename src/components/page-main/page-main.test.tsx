import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Movies} from '../../mock/movies';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import PageMain from './page-main';

const mockStore = configureStore([]);

import {NameSpace} from '../../reducer/name-space';

import {initialState as dataInitialState} from '../../reducer/data/data';
import {initialState as userInitialState} from '../../reducer/user/user';
import {initialState as appInitialState} from '../../reducer/app-state/app-state';

const store = mockStore({
  [NameSpace.APP]: appInitialState,
  [NameSpace.DATA]: {...dataInitialState, allMovies: Movies},
  [NameSpace.USER]: userInitialState,
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
