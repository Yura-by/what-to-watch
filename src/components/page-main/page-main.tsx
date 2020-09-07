import * as React from 'react';

import {Movie} from '../../types';

import MovieCard from '../../components/movie-card/movie-card';
import PageContent from '../page-content/page-content';
import Catalog from '../catalog/catalog';
import withMoreButton from '../../hocs/with-more-button/with-more-button';

const CatalogWrapped = withMoreButton(Catalog);

const PageMain = () => {
  return (
    <React.Fragment>
      <MovieCard />
      <PageContent>
        <CatalogWrapped />
      </PageContent>
    </React.Fragment>
  );
};

export default PageMain;
