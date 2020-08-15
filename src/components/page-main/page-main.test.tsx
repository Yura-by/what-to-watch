import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Movies} from '../../mock/movies';

import PageMain from './page-main';

it(`PageMain snapshot test`, () => {
  const tree = renderer
    .create(<PageMain
      allMovies={Movies}
      onSelectMovie={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
