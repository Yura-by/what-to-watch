import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Movies} from '../../mock/movies';

import MoviesList from './movies-list';

it(`MoviesList renders correctly`, () => {
  const tree = renderer.create(<MoviesList
    movies={Movies}
    onCardClick={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
