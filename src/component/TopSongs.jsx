import React, { useRef, useState, useEffect } from "react";
import { FaSpotify, FaCaretRight } from "react-icons/fa6";
import "./TopSongs.css";

const songs = [
  {
    title: "Frankenstein Posmo",
    artist: "Cuarteto de Nos",
    image: "/FrankensteinPosmo.jpg",
    audio: "/FrankensteinPosmo.mp3",
    bgColor: "bg-[#9c7ea0]",
  },
  {
    title: "Hope",
    artist: "NF",
    image: "/Hope.jpg",
    audio: "/Hope.mp3",
    bgColor: "bg-[#6d415d]",
  },
  {
    title: "Ma Meilleure Ennemie",
    artist: "Stromae, Pomme",
    image: "/MaMeilleureEnnemie.jpg",
    audio: "/MaMeilleureEnnemie.mp3",
    bgColor: "bg-[#a62349]",
  },
];

function TrackCard({
  song,
  index,
  currentPlayingIndex,
  setCurrentPlayingIndex,
  audioRef,
  progress,
}) {
  const isPlaying = currentPlayingIndex === index;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setCurrentPlayingIndex(null);
    } else {
      setCurrentPlayingIndex(index);
    }
  };

  return (
    <div className={`rounded-xl shadow-md text-white flex flex-col gap-1 px-4 py-3 ${song.bgColor}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            aria-label={isPlaying ? "Pause" : "Play"}
            className="w-8 h-8 text-black flex items-center justify-center hover:scale-110 transition-transform"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <div className="flex items-center gap-[2px] rotate-180 h-8">
                <div className="load"></div>
                <div className="load"></div>
                <div className="load"></div>
                <div className="load"></div>
              </div>
            ) : (
              <FaCaretRight />
            )}
          </button>
          <img src={song.image} alt={song.title} className="w-[40px] h-[40px] rounded-md object-cover" />
          <div>
            <h3 className="font-semibold">{song.title}</h3>
            <p className="text-sm opacity-80">{song.artist}</p>
          </div>
        </div>
      </div>

      {isPlaying && (
        <div className="w-full h-1 bg-white/30 rounded-full mt-2">
          <div
            className="h-1 bg-white rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

function TopSongs() {
  const audioRef = useRef(new Audio());
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (currentPlayingIndex !== null) {
      audio.src = songs[currentPlayingIndex].audio;
      audio.play();

      audio.ontimeupdate = () => {
        setProgress((audio.currentTime / audio.duration) * 100 || 0);
      };

      audio.onended = () => {
        setCurrentPlayingIndex(null);
        setProgress(0);
      };
    }

    return () => {
      audio.pause();
      audio.ontimeupdate = null;
      audio.onended = null;
    };
  }, [currentPlayingIndex]);

  return (
    <section className="hidden md: flex max-w-xl mx-auto mt-10 space-y-4 bg-white p-3 pb-4 rounded-lg">
      <h2 className="text-center text-[#1ED760] text-2xl font-bold mb-4 flex items-center justify-center gap-2">
        <FaSpotify />
        My Top Songs
      </h2>
      {songs.map((song, index) => (
        <TrackCard
          key={index}
          song={song}
          index={index}
          currentPlayingIndex={currentPlayingIndex}
          setCurrentPlayingIndex={setCurrentPlayingIndex}
          audioRef={audioRef}
          progress={currentPlayingIndex === index ? progress : 0}
        />
      ))}
    </section>
  );
}

export default TopSongs;
