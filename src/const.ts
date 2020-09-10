import { Route } from "react-router-dom"

export enum Navigation {
  overview = `overview`,
  details = `details`,
  reviews = `reviews`
}

export enum Genre {
  ALL_GENRES = 'All genres'
}

export enum Count {
  START = 8,
  ADD = 4,
}

export enum URL {
  DOMEN = `https://htmlacademy-react-3.appspot.com`,
  HOST = `/wtw`,
}

export enum AppRoute {
  ROOT = `/`,
  LOGIN = `/login`,
  ADD_COMMENT = `/add-comment/`,
  MOVIE = `/movie/`,
  PLAYER = `/player/`,
  FAVORITES = `/favorites`
}
