import React, { useRef, useState } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src="/path/to/your/video.mp4"
        className="w-full"
      />
      <button onClick={togglePlay} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;