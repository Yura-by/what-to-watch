import * as React from 'react';
import {Movie} from '../../types';
import SmallMovieCard from '../small-movie-card/small-movie-card';

interface Props {
  onCardHover: (id: number) => void;
  onCardLeave: () => void;
  playingPlayer: number;
  movies: Movie[];
}

const MoviesList: React.FunctionComponent<Props> = (props: Props) => {
  const {movies, onCardHover, onCardLeave, playingPlayer} = props;
  if (movies.length === 0) {
    return null;
  }
  return (
    <div className="catalog__movies-list">
      {movies.map((it) => {
        return (
          <SmallMovieCard
            movie={it}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
            key={it.id}
            isPlayVideo={playingPlayer === it.id}
          />
        );
      })}
    </div>
  );
};

export default MoviesList;
