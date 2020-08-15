import * as React from 'react';
import PageMain from '../page-main/page-main';

import {Movies} from '../../mock/movies';

const App = () => {
  return (
    <PageMain
      allMovies={Movies}
      onSelectMovie={(id: number) => {
        return id + 1;
      }}
    />
  );
};

export default App;
