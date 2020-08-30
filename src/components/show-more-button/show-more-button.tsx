import * as React from 'react';

interface Props {
  onShowMoreClick: () => void;
}

const ShowMoreButton: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <button className="catalog__button" type="button"
      onClick={props.onShowMoreClick}
    >Show more</button>
  );
}

export default ShowMoreButton;
