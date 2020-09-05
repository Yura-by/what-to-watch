import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Movies} from '../../mock/movies';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

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


configure({adapter: new Adapter()});

it(`On click on title callback is called correctly`, () => {
  const mockFunc = jest.fn();
  const tree = mount(<Provider store={store}>
    <PageMain
      allMovies={Movies}
      onSelectMovie={mockFunc}
    />
  </Provider>);

  const titles = tree.find(`.small-movie-card__link`);
  const firstTitle = titles.at(0);
  firstTitle.simulate(`click`, {preventDefault: jest.fn()});
  expect(mockFunc).toHaveBeenCalledTimes(1);
  expect(mockFunc).toHaveBeenNthCalledWith(1, Movies[0]);

});
