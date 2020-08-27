import * as React from 'react';
import {Store} from '../../types';
import {connect} from 'react-redux';
import {Genre} from '../../const';

import {getAllGenres, getActiveGenre} from '../../reducer/selectors';
import {ActionCreator} from '../../reducer/reducer';

interface Props {
  genres: string[],
  activeGenre: string;
  onGenreSelect: (genre: string) => void;
}

const GenresList: React.FunctionComponent<Props> = (props: Props) => {
  const allItems: string[] = [Genre.ALL_GENRES, ...props.genres];
  const {activeGenre, onGenreSelect} = props;
  return (
    <ul className="catalog__genres-list">
      {allItems.map((item) => {
        const acitveClass = activeGenre === item ? `catalog__genres-item--active`: ``;
        return (
          <li className={`catalog__genres-item ${acitveClass}`} key={item}>
            <a href="#" className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreSelect(item);
              }}
            >{item}</a>
          </li>
        );
      })}
      {/* <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Comedies</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Crime</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Documentary</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Dramas</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Horror</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Kids & Family</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Romance</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Sci-Fi</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Thrillers</a>
      </li> */}
    </ul>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    genres: getAllGenres(state),
    activeGenre: getActiveGenre(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreSelect: (name: string) => {
      dispatch(ActionCreator.setGenre(name));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
