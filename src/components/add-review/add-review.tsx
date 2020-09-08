import * as React from 'react';
import {Movie, Store} from '../../types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

import {getUserAvatar} from '../../reducer/user/selectors';

import {URL} from '../../const';


import Logo from '../logo/logo';

interface Props {
  movie: Movie;
  onReviewChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onReviewSend: (evt: React.FormEvent<HTMLFormElement>) => void;
  onRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  rating: number;
  comment: string;
  avatar: string;
  isSendingComment: boolean;
  isBadSentComment: boolean;
}

const AddReview: React.FunctionComponent<Props> = (props: Props) => {
  const {movie, onReviewChange, onReviewSend, onRatingChange, rating, comment, avatar, isSendingComment, isBadSentComment} = props;
  if (!movie) {
    return null;
  }
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.backgroundImage} alt={movie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.MOVIE}${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <Link to={AppRoute.FAVORITES}>
                <img src={`${URL.DOMEN}${avatar}`} alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={movie.posterImage} alt={`${movie.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form"
          onSubmit={onReviewSend}
        >
          <div className="rating">
            <div className="rating__stars">
              {Array(5).fill(``).map((it, index) => {
                const numberInput = index + 1;
                return (
                  <React.Fragment key={Date.now() + Math.random() * 1000000}>
                    <input className="rating__input" id={`star-${numberInput}`} type="radio" name="rating" value={numberInput}
                      onChange={onRatingChange}
                      checked={rating === numberInput}
                      disabled={isSendingComment}
                    />
                    <label className="rating__label" htmlFor={`star-${numberInput}`}>Rating {numberInput}</label>
                  </React.Fragment>

                );
              })}
            </div>
          </div>

          <div className="add-review__text">
            {isBadSentComment ? <div>Comment is not allowed to be empty!</div> : ``}
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
              disabled={isSendingComment}
              onChange={onReviewChange}
              value={comment}
            >

            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit"
                disabled={isSendingComment}
              >Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    avatar: getUserAvatar(state)
  };
};

export default connect(mapStateToProps)(AddReview);
