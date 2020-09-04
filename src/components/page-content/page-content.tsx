import * as React from 'react';

import Footer from '../footer/footer';

interface Props {
  children: React.ReactNode;
}

const PageContent: React.FunctionComponent<Props> = (props: Props) => {
  return <div className="page-content">
    {props.children}
    <Footer />
  </div>;
};

export default PageContent;
