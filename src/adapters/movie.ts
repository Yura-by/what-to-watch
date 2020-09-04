class Movie{
  id: number;
  backgroundColor: string;
  backgroundImage: string;
  description: string;
  director: string;
  genre: string;
  isFavorite: boolean;
  name: string;
  posterImage: string;
  previewImage: string;
  previewVideoLink: string;
  rating: number;
  released: number;
  runTime: number;
  scoresCount: number;
  starring: string[];
  videoLink: string;

  constructor(raw) {
    this.backgroundColor = raw.background_color;
    this.backgroundImage = raw.background_image;
    this.description = raw.description;
    this.director = raw.director;
    this.genre = raw.genre;
    this.id = raw.id;
    this.isFavorite = raw.is_favorite;
    this.name = raw.name;
    this.posterImage = raw.poster_image;
    this.previewImage = raw.preview_image;
    this.previewVideoLink = raw.preview_video_link;
    this.rating = raw.rating;
    this.released = raw.released;
    this.runTime = raw.run_time;
    this.scoresCount = raw.scores_count;
    this.starring = raw.starring;
    this.videoLink = raw.video_link;
  }

  static getMovie(rawMovie) {
    return new Movie(rawMovie);
  }

  static getMovies(rawMovies) {
    return rawMovies.map((raw) => Movie.getMovie(raw));
  }
};

export default Movie;

