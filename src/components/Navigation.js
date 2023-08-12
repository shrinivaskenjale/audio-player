import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";

const Navigation = ({
  onPlayPreviousSong,
  isPlaying,
  onPlayNextSong,
  onPlayPause,
}) => {
  return (
    <div className="navigation">
      <button className="action-btn" onClick={onPlayPreviousSong}>
        <FaBackward />
      </button>
      <button className="action-btn action-btn-big" onClick={onPlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button className="action-btn" onClick={onPlayNextSong}>
        <FaForward />
      </button>
    </div>
  );
};

export default Navigation;
