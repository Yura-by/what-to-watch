import * as React from 'react';

interface Props {
  src: string;
  poster: string;
}

const Video = React.forwardRef((props: Props, ref: React.RefObject<HTMLVideoElement>) => {
  const {src, poster} = props;

  return (
    <video
      ref={ref}
      src={src}
      className="player__video"
      poster={poster}
    >
    </video>
  );
});

Video.displayName = `Video`;

export default Video;
