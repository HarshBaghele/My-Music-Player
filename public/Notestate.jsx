import React, { useRef, useState, useEffect } from "react";
import NoteContext from "./Notecontext";

const NoteState = (props) => {
  const LoveS = [
    { title: "heer", img: "https://c.saavncdn.com/430/Aashiqui-2-Hindi-2013-500x500.jpg", src: 'heer.mp3' },
    { title: "pahele", img: "https://i.ytimg.com/vi/gRs7oQmerq0/maxresdefault.jpg", src: 'pahela.mp3' },
    { title: "Tere Bina", img: "https://i.ytimg.com/vi/RMd2hXlVEQg/maxresdefault.jpg", src: "hh" },
    { title: "Tera Ban Jauga", img: "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20240131131003-500x500.jpg", src: 'heer.mp3' },
    { title: "Dil Diyan Gallan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYFkIjSVn9s_K4sgMdoFdQLOHYFYnmGPZgA&s", src: 'heer.mp3' },
    { title: "Haan Ke Haan Song", img: "https://lh3.googleusercontent.com/I1GQ5TK0EN2W41YbO_FJu9VS91vngSEqMn1YbddRvP80sJHy4FBuU0ZzlwAswKD26YCL3vc4A4NKZgpJRg", src: 'heer.mp3' },
    { title: "Main Rang Sharbaton Ka", img: "https://i.pinimg.com/originals/f6/41/50/f64150d850ed24f97a8e49bb824c2b9e.jpg", src: 'heer.mp3' },
    { title: "Mere Yaaraa", img: "https://c.saavncdn.com/649/Mere-Yaaraa-From-Sooryavanshi--Hindi-2021-20211027113043-500x500.jpg", src: 'heer.mp3' },
    { title: "Angaaron", img: "https://c.saavncdn.com/580/Angaaron-From-Pushpa-2-The-Rule-Hindi-2024-20240528221027-500x500.jpg", src: 'heer.mp3' },
    { title: "Main Hu Sath Tere", img: "https://c.saavncdn.com/861/Shaadi-Mein-Zaroor-Aana-Hindi-2017-20171024101945-500x500.jpg", src: 'heer.mp3' },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(new Audio());
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateTime);
    };
  }, []);

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const playSong = (song) => {
    const audio = audioRef.current;
    audio.src = song.src; // Make sure each song in LoveS has a `src` field (URL to audio file)
    audio.play();
    setCurrentSong(song);
    setIsPlaying(true);
  };
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        LoveS,
        playSong,
        isPlaying,
        currentSong,
        togglePlayPause

      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;