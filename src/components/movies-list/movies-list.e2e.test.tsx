import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Movies} from '../../mock/movies';

import MoviesLIst from './movies-list';

configure({adapter: new Adapter()});

it(`Correct data fall in state`, () => {
  const tree = mount(<MoviesLIst
    movies={Movies}
    onCardClick={jest.fn()}
  />);

  const movies = tree.find(`.small-movie-card`);
  const fourthFilm = movies.at(3);

  fourthFilm.simulate(`mouseenter`);
  expect(tree.state().hoverMovie).toEqual(4);
});
