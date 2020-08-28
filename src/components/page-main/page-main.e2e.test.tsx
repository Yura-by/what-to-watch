import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Movies} from '../../mock/movies';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Genre} from '../../const';

import PageMain from './page-main';

const mockStore = configureStore([]);

const store = mockStore({
  allMovies: Movies,
  genre: Genre.ALL_GENRES
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
