const MusicInfo = ({ title, onSetProgress, progress }) => {
  return (
    <div className="music-info">
      <h4 className="title">{title}</h4>
      <div className="progress-container" onClick={onSetProgress}>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default MusicInfo;
