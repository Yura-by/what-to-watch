import * as React from 'react';

import {Movie} from '../../types';

import MovieCard from '../../components/movie-card/movie-card';
import PageContent from '../page-content/page-content';
import Catalog from '../catalog/catalog';

interface Props {
  allMovies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

const PageMain: React.FunctionComponent<Props> = (props: Props) => {
  const {allMovies, onSelectMovie} = props;
  return (
    <React.Fragment>
      <MovieCard />
      <PageContent>
        <Catalog
          movies={allMovies}
          onCardClick={onSelectMovie}
        />
      </PageContent>
    </React.Fragment>
  );
};

export default PageMain;
