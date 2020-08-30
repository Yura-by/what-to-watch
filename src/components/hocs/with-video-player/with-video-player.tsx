import * as React from 'react';
import {Movie} from '../../../types';

import Video from '../../video/video';



const withVideoPlayer = (Component: React.ReactNode) => {

  class WithVideoPlayer extends React.PureComponent {
    private _videoRef: React.RefObject<HTMLVideoElement>;
    private _progressRef: React.RefObject<HTMLProgressElement>;

    constructor(props) {
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
    }

    render() {
      const {movie, onExitPlayer} = this.props;
      const {ref, src, poster} = movie;
      return (
        <Component >
          <Video />
        </Component>
      );
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
        })
      }

      video.ontimeupdate = this._videoOntimeupdateHandler;
    }

    componentWillUnmount() {
      const video: HTMLVideoElement = this._videoRef.current;

      video.src = ``;
      video.ontimeupdate = null;
    }
  }
}
