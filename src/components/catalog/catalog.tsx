import * as React from 'react';
import {Movie} from '../../types';

interface Props {
  movies: Movie[];
  onCardClick: (id: number) => void;
}

const Catalog: React.FunctionComponent<Props> = (props: Props) => {
  const {movies, onCardClick} = props;
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
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
        </li>
      </ul>

      <div className="catalog__movies-list">

        {movies.map((it) => {
          return (
            <article className="small-movie-card catalog__movies-card" key={it.id}>
              <div className="small-movie-card__image">
                <img src={it.previewImage} alt={it.name} width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a
                  className="small-movie-card__link"
                  href="movie-page.html"
                  onClick={(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                    evt.preventDefault();
                    onCardClick(it.id);
                  }}
                >{it.name}</a>
              </h3>
            </article>
          );
        })}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

export default Catalog;
