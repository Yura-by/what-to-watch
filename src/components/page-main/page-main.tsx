import * as React from 'react';

import {Movie} from '../../types';

import MovieCard from '../../components/movie-card/movie-card';
import PageContent from '../page-content/page-content';
import Catalog from '../catalog/catalog';
import withMoreButton from '../../hocs/with-more-button/with-more-button';

const CatalogWrapped = withMoreButton(Catalog);

interface Props {
  allMovies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

const PageMain: React.FunctionComponent<Props> = (props: Props) => {
  const {allMovies, onSelectMovie} = props;
  return (
    <React.Fragment>
      <MovieCard
        movie={allMovies[0]}
      />
      <PageContent>
        <CatalogWrapped
          onCardClick={onSelectMovie}
        />
      </PageContent>
    </React.Fragment>
  );
};

export default PageMain;
