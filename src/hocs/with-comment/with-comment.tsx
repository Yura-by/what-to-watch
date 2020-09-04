import * as React from 'react';
import {Movie, Store, SendingComment} from '../../types';
import {Subtract} from 'utility-types';
import {connect} from 'react-redux';
import {Operation} from '../../reducer/data/data';

import {getSelectedMovie} from '../../reducer/app-state/selectors';

interface State {
  rating: number;
  comment: string;
}

interface Props {
  movie: Movie;
}

interface InjectingProps {
  onReviewChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onReviewSend: (evt: React.FormEvent<HTMLFormElement>) => void;
  onRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  rating: number;
  comment: string;
}

const withComment = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectingProps>;


  class WithComment extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: 1,
        comment: ``,
      }

      this._reviewSendHandler = this._reviewSendHandler.bind(this);
      this._reviewChangeHandler = this._reviewChangeHandler.bind(this);
      this._ratingChangeHandler = this._ratingChangeHandler.bind(this);
    }

    private _reviewSendHandler(evt: React.FormEvent<HTMLFormElement>) {
      evt.preventDefault();
      this.props.onReviewSend(this.props.movie.id, {
        rating: this.state.rating,
        comment: this.state.comment,
      })
    }

    private _reviewChangeHandler(evt: React.ChangeEvent<HTMLTextAreaElement>) {
      this.setState({
        comment: evt.target.value
      });
    }

    private _ratingChangeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
      this.setState({
        rating: Number(evt.target.value)
      });
    }

    render() {
      return (
        <Component
          onReviewSend={this._reviewSendHandler}
          onReviewChange={this._reviewChangeHandler}
          onRatingChange={this._ratingChangeHandler}
          rating={this.state.rating}
          comment={this.state.comment}
          movie={this.props.movie}
        />
      );
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(WithComment);
}

const mapStateToProps = (state: Store) => {
  return {
    movie: getSelectedMovie(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onReviewSend: (id: number, review: SendingComment) => {
      dispatch(Operation.sendComment(id, review));
    },
  }
};

export default withComment;
