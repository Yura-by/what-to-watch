import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Movies} from '../../mock/movies';

import PageMain from './page-main';

configure({adapter: new Adapter()});

it(`On click on title callback is called correctly`, () => {
  const mockFunc = jest.fn();
  const tree = mount(<PageMain
    allMovies={Movies}
    onSelectMovie={mockFunc}
  />);

  const titles = tree.find(`.small-movie-card__link`);
  const firstTitle = titles.at(0);
  firstTitle.simulate(`click`, {preventDefault: jest.fn()});
  expect(mockFunc).toHaveBeenCalledTimes(1);
  expect(mockFunc).toHaveBeenNthCalledWith(1, 1);

});
