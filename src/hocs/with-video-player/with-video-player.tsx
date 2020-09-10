import * as React from 'react';
import {Movie, Store} from '../../types';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';

import {getAllMovies} from '../../reducer/data/selectors';

import Video from '../../components/video/video';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  movies: Movie[];
}

interface State {
  isPlaying: boolean;
  currentTime: number;
  percentsVideo: number;
}

const withVideoPlayer = (Component) => {

  class WithVideoPlayer extends React.PureComponent<Props, State> {

    private _videoRef: React.RefObject<HTMLVideoElement>;
    private _progressRef: React.RefObject<HTMLProgressElement>;

    constructor(props: Props) {
      super(props);

      this._videoRef = React.createRef();
      this._progressRef = React.createRef();
      this.state = {
        isPlaying: false,
        currentTime: 0,
        percentsVideo: 0,
      };

      this._startButtonClickHandler = this._startButtonClickHandler.bind(this);
      this._progressClickHandler = this._progressClickHandler.bind(this);
      this._videoOntimeupdateHandler = this._videoOntimeupdateHandler.bind(this);
      this._fullscreenButtonClickHandler = this._fullscreenButtonClickHandler.bind(this);
    }

    render() {
      const {movies, match} = this.props;
      const movie = movies.find((it) => it.id === Number(match.params.id));
      let videoLink = ``;
      let backgroundImage = ``;
      if (movie) {
        videoLink = movie.videoLink;
        backgroundImage = movie.backgroundImage;
      }
      return (
        <Component
          percentsVideo={this.state.percentsVideo}
          progressRef={this._progressRef}
          onProgressClick={this._progressClickHandler}
          currentTime={this.state.currentTime}
          onStartButtonClick={this._startButtonClickHandler}
          isPlaying={this.state.isPlaying}
          onFullscreenClick={this._fullscreenButtonClickHandler}
        >
          <Video
            ref={this._videoRef}
            src={videoLink}
            poster={backgroundImage}
          />
        </Component>
      );
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentDidMount() {
      const video: HTMLVideoElement = this._videoRef.current;
      document.onfullscreenchange = () => {
        if (document.fullscreenElement) {
          video.ontimeupdate = null;
        } else {
          video.ontimeupdate = this._videoOntimeupdateHandler;
        }

        this.setState({
          isPlaying: !video.paused
        });
      };

      video.ontimeupdate = this._videoOntimeupdateHandler;
    }

    componentWillUnmount() {
      const video: HTMLVideoElement = this._videoRef.current;

      video.src = ``;
      video.ontimeupdate = null;
    }

    private _fullscreenButtonClickHandler() {
      this._videoRef.current.requestFullscreen();
    }

    private _videoOntimeupdateHandler() {
      const video: HTMLVideoElement = this._videoRef.current;
      const percentsVideo = video.currentTime / video.duration * 100;
      this.setState({
        percentsVideo,
        currentTime: video.currentTime
      });
    }


    private _startButtonClickHandler() {
      this.setState((prevState) => {
        return {
          isPlaying: !prevState.isPlaying
        };
      });
    }

    private _progressClickHandler(evt: React.MouseEvent<HTMLProgressElement, MouseEvent>) {
      const video: HTMLVideoElement = this._videoRef.current;
      const width: number = this._progressRef.current.offsetWidth;
      const point: number = evt.nativeEvent.offsetX;
      video.pause();
      video.currentTime = this._videoRef.current.duration * point / width;
      video.play();
    }

  }

  return connect(mapStateToProps)(WithVideoPlayer);
};

const mapStateToProps = (state: Store) => {
  return {
    movies: getAllMovies(state)
  };
};

export default withVideoPlayer;
