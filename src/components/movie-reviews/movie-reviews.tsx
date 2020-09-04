import * as React from 'react';
import {Comment, Store} from '../../types';
import {connect} from 'react-redux';
import {getReviews} from '../../reducer/data/selectors';

import Review from '../review/review';

interface Props {
  comments: Comment[];
}

const MovieReviews: React.FunctionComponent<Props> = (props: Props) => {
  const {comments} = props;
  switch(comments.length) {
    case 0:
      return null;
    case 1:
      return (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            <Review comment={comments[0]} />
          </div>
        </div>
      );
  }
  const commentsLeftColumn = comments.filter((it) => (it.id - 1) % 2 === 0);
  const commentsRightColumn = comments.filter((it) => it.id % 2 === 0);
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {commentsLeftColumn.map((it) => <Review comment={it} />)}
      </div>
      <div className="movie-card__reviews-col">
        {commentsRightColumn.map((it) => <Review comment={it} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    comments: getReviews(state),
  };
}

export default connect(mapStateToProps)(MovieReviews);
