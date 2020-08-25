import * as React from 'react';

import {Navigation} from '../../const';

interface Props {
  activeNav: Navigation;
  onNavClick: (name: Navigation) => void;
}

const Navigator: React.FunctionComponent<Props> = (props: Props) => {
  const {activeNav, onNavClick} = props;
  const navigationNames = Object.values(Navigation);
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {navigationNames.map((it) => {
          const activeClass = it === activeNav ? `movie-nav__item--active` : ``;
          const name = it.charAt(0).toUpperCase() + it.substr(1);
          return (
            <li className={`movie-nav__item ${activeClass}`} key={it}>
              <a href="#"
                className="movie-nav__link"
                onClick={(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                  evt.preventDefault();
                  onNavClick(it);
                }}
              >{name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigator;
