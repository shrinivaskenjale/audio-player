import { songsList } from "./data";
import { useRef, useState } from "react";
import MusicInfo from "./components/MusicInfo";
import Navigation from "./components/Navigation";
import CoverImage from "./components/CoverImage";

const App = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef();

  const currentSong = songsList[currentSongIndex];

  const handlePlayPause = (e) => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handlePlayNextSong = () => {
    setCurrentSongIndex((csi) => (csi + 1) % songsList.length);
  };

  const handlePlayPreviousSong = () => {
    setCurrentSongIndex((csi) => {
      if (csi === 0) {
        return songsList.length - 1;
      }
      return csi - 1;
    });
  };

  const handleProgress = (e) => {
    const audio = audioRef.current;
    const progressInPercent = (audio.currentTime / audio.duration) * 100;
    setProgress(progressInPercent);
  };

  const handleSetProgress = (e) => {
    const audio = audioRef.current;
    // total width of progress bar in px
    const width = e.target.clientWidth;
    // horizontal distance from left edge to clicked position
    // https://stackoverflow.com/questions/31519758/reacts-mouseevent-doesnt-have-offsetx-offsety
    const distance = e.nativeEvent.offsetX;

    audio.currentTime = (distance / width) * audio.duration;
  };

  return (
    <main>
      <h1>Audio Player</h1>
      <div className={`music-container ${isPlaying ? "play" : ""}`}>
        <MusicInfo
          title={currentSong.title}
          onSetProgress={handleSetProgress}
          progress={progress}
        />
        <div className="music">
          <audio
            ref={audioRef}
            src={currentSong.song}
            autoPlay={isPlaying}
            onTimeUpdate={handleProgress}
            onEnded={handlePlayNextSong}
          />

          <CoverImage image={currentSong.coverImage} />
          <Navigation
            isPlaying={isPlaying}
            onPlayNextSong={handlePlayNextSong}
            onPlayPause={handlePlayPause}
            onPlayPreviousSong={handlePlayPreviousSong}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
