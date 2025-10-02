import React, { useContext, useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import NoteContext from "./Notecontext";


const Songs = () => {
  const { LoveS, playSong,
    isPlaying,Categorie,
    currentSong,title,  togglePlayPause, currentTime, duration, formatTime, setCurrentTime, audioRef, playNextSong, playPrevSong,
  } = useContext(NoteContext);
  const progressBarRef = useRef(null);

  const handleSeek = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const totalWidth = rect.width;
    const clickRatio = clickX / totalWidth;
    const newTime = clickRatio * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime); // optional: for immediate UI feedback
  };
  return (
    <div
      className="player-container"
      style={{
        marginTop: "20px",
        backgroundImage: 'url("music2.jpg")',
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
      }}
    >
      <h2 className="title" style={{ marginLeft: '30px' }}>{title}</h2>
      <div className="player-content">
        <div className="playlist">
          {Categorie.map((song, index) => (
            <div className="song-item" key={index} onClick={() => playSong(song, index)}>
              <img src={song.img} alt={song.title} className="song-image" />
              <span className="song-name">{song.heding}</span>
              <button className="play-btn" >
                {(isPlaying && currentSong === song.title) ? <FaPause /> : <FaPlay />}
              </button>
            </div>
          ))}
        </div>
        <div className="background-panel">

        </div>
      </div>

      <div className="bottom-player">
        <div
          ref={progressBarRef}
          onClick={handleSeek}
          style={{
            height: '6px',
            width: '100%',
            backgroundColor: '#444',
            borderRadius: '3px',
            overflow: 'hidden',
            margin: '10px 0',
            cursor: 'pointer'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${(currentTime / duration) * 100 || 0}%`,
              backgroundColor: '#00ff99',
              transition: 'width 0.3s ease'
            }}
          />
        </div>
        <h4 id="tit" style={{ textAlign: 'center' }}>  {isPlaying && currentSong ? `${currentSong}` :`${currentSong}`}</h4>
        <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="controls">
        <FaStepBackward className="icon" onClick={() => playPrevSong(Categorie)} />

        {isPlaying ? (
          <FaPause className="icon" onClick={togglePlayPause} />
        ) : (
          <FaPlay className="icon" onClick={togglePlayPause} />
        )}

        <FaStepForward className="icon" onClick={() => playNextSong(Categorie)} />
      </div>
    </div>
  );
};

export default Songs;
