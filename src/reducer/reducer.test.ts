import {reducer, ActionCreator, initialState, ActionType} from './reducer';
import {Genre} from '../const';
import {Movies} from '../mock/movies';

describe(`Reducer works correctly`, () => {

  it(`Reducer returns initial state`, () => {
    expect(reducer(undefined, {type: `NO`, payload: 1})).toEqual(initialState);
  });

  it(`Reducer sets genre correctly`, () => {
    expect(reducer({
      allMovies: null,
      genre: Genre.ALL_GENRES
    }, {
      type: ActionType.SET_GENRE,
      payload: `music`
    })).toEqual({
      allMovies: null,
      genre: `music`
    });
  });

  it(`Reducer sets movies correctly`, () => {
    expect(reducer({
      allMovies: null,
      genre: Genre.ALL_GENRES
    }, {
      type: ActionType.SET_MOVIES,
      payload: [Movies[1]]
    })).toEqual({
      allMovies: [Movies[1]],
      genre: Genre.ALL_GENRES
    });
  });


});

describe(`ActionCreator works correctly`, () => {
  it(`setMovies return required action`, () => {
    expect(ActionCreator.setMovies(Movies)).toEqual({
      type: ActionType.SET_MOVIES,
      payload: Movies
    })
  });

  it(`setGenre return required action`, () => {
    expect(ActionCreator.setGenre(`comedy`)).toEqual({
      type: ActionType.SET_GENRE,
      payload: `comedy`
    })
  });

})
