import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

interface Props {
  percentsVideo: number;
  progressRef: React.RefObject<HTMLProgressElement>;
  onProgressClick: (evt: React.MouseEvent<HTMLProgressElement, MouseEvent>) => void;
  currentTime: number;
  onStartButtonClick: () => void;
  isPlaying: boolean;
  onFullscreenClick: () => void;
  children: React.ReactNode;
}

const formatTime = (time: number): string => {
  if (time / 10 >= 1) {
    return `${time}`;
  }
  return `0${time}`;
};

const Player: React.FunctionComponent<Props> = (props: Props) => {

  const {
    percentsVideo,
    progressRef,
    onProgressClick,
    currentTime,
    onStartButtonClick,
    isPlaying,
    onFullscreenClick
  } = props;

  const hours: string = formatTime(Math.floor(currentTime / 3600));
  const minutes: string = formatTime(Math.floor(currentTime / 60) - (Number(hours) * 60));
  const seconds: string = formatTime(Math.floor(currentTime % 60));
  return (
    <div className="player">
      {props.children}

      <Link to={AppRoute.ROOT}
        className="player__exit"
      >Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={percentsVideo || 0} max="100"
              ref={progressRef}
              onClick={onProgressClick}
            ></progress>
            <div className="player__toggler" style={{left: `${percentsVideo}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{`${hours}:${minutes}:${seconds}`}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={onStartButtonClick}
          >
            {isPlaying
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

          <button type="button" className="player__full-screen"
            onClick={onFullscreenClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
