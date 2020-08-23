import * as React from 'react';
import {Movie} from '../../types';

const formatTime = (time: number): string => {
  if (time / 10 > 1) {
    return `${time}`;
  }
  return `0${time}`;
}

interface Props {
  movie: Movie;
  onExitPlayer: () => void;
}

interface State {
  isPlaying: boolean;
  currentTime: number;
  percentsVideo: number;
}

export default class VideoPlayer extends React.PureComponent<Props, State> {
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
    }

    this._startButtonClickHandler = this._startButtonClickHandler.bind(this);
    this._progressClickHandler = this._progressClickHandler.bind(this);
  }

  _startButtonClickHandler() {
    this.setState((prevState) => {
      return {
        isPlaying: !prevState.isPlaying
      }
    })
  }

  _progressClickHandler(evt: React.MouseEvent<HTMLProgressElement, MouseEvent>) {
    const video: HTMLVideoElement = this._videoRef.current;
    const width: number = this._progressRef.current.offsetWidth;
    const point: number = evt.nativeEvent.offsetX;
    video.pause();
    video.currentTime = this._videoRef.current.duration * point / width;
    video.play();
  }

  render() {
    const {movie, onExitPlayer} = this.props;
    const {currentTime} = this.state;
    const hours: string = formatTime(Math.floor(currentTime / 3600));
    const minutes: string = formatTime(Math.floor(currentTime / 60)- (Number(hours) * 60));
    const seconds: string = formatTime(Math.floor(currentTime % 60));
    const {percentsVideo} = this.state;
    return (
      <div className="player">
        <video
          ref={this._videoRef}
          src={movie.videoLink}
          className="player__video"
          poster={movie.backgroundImage}
        >
        </video>

        <button
          onClick={onExitPlayer}
          type="button"
          className="player__exit"
        >Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={percentsVideo} max="100"
                ref={this._progressRef}
                onClick={this._progressClickHandler}
              ></progress>
              <div className="player__toggler" style={{left: `${percentsVideo}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{`${hours}:${minutes}:${seconds}`}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play"
              onClick={this._startButtonClickHandler}
            >
              {this.state.isPlaying
                ? <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                : <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
              }
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
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

    video.ontimeupdate = () => {
      const percentsVideo = video.currentTime / video.duration * 100;
      this.setState({
        percentsVideo: percentsVideo,
        currentTime: video.currentTime
      })
    }
  }

  componentWillUnmount() {
    const video: HTMLVideoElement = this._videoRef.current;

    video.src = ``;
    video.ontimeupdate = null;
  }
}
