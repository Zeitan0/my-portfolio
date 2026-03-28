import React, { useRef, useState } from "react";
import "./Intro.css";
import AboutMeBox from "./AboutMeBox";
import background_coding from "./assets/9.png";
import music_Player from "./assets/music_Player.png";
import clock from "./assets/clock.png";
import sl from "./assets/sl.png";
import shelf from "./assets/shelf.png";
import tv from "./assets/TV.png";
import image from "./assets/attack_on_titan_pixel_art.png";

function Intro() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

const playPromiseRef = useRef(null);

const handleMusicToggle = () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (isPlaying) {
    if (playPromiseRef.current !== undefined) {
      playPromiseRef.current.then(() => {
        audio.pause();
        setIsPlaying(false);
      }).catch(error => {
        console.log("Pause was blocked because play failed:", error);
      });
    }
  } else {
    audio.volume = 0.4;
    
    playPromiseRef.current = audio.play();

    playPromiseRef.current
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.error("Playback failed:", err);
        setIsPlaying(false);
      });
  }
};

  return (
    <>
      <audio ref={audioRef} loop muted={false} preload="auto">
  <source src="/bg-music.mp3" type="audio/mpeg" />
</audio>

      <div className="absolute top-0 w-full h-[6px] bg-black z-20"></div>
      
      <div className="second_background">
        <img src={background_coding} alt="coding background" className="background-img" />
      </div>

      <div className="absolute top-[55%] left-[37%] -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[50vw] z-30">
        <AboutMeBox />
      </div>



<div 
        className="absolute top-[35%] left-[65%] -translate-x-1/2 -translate-y-1/2 
                   w-80 md:w-70 z-20 cursor-pointer group transition-all duration-500"
      >
        <div className="relative border-[16px] border-[#2b1d0e] shadow-2xl overflow-hidden rounded-sm 
                        group-hover:scale-105 group-hover:border-[#3d2a15] transition-transform duration-300 animate-shake">
          
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <img 
            src={image} 
            alt="attack on titan art" 
            className="w-full h-auto block brightness-[0.95] group-hover:brightness-110 transition-all" 
          />
        </div>
        
        <p className="text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono tracking-widest uppercase">
          Dedicate your heart
        </p>
      </div>

<div className="absolute top-[32%] left-[49%] -translate-y-1/2 w-200 md:w-350 z-21 pointer-events-none">
  <img 
    src={clock} 
    alt="clock" 
    className="w-full h-auto"
  />
</div>

<div className="absolute top-[80%] left-[-24%] -translate-y-1/2 w-200 md:w-350 z-21 pointer-events-none">
  <img 
    src={shelf} 
    alt="shelf" 
    className="w-full h-auto"
  />
</div>



      <div className="absolute bottom-0 w-full h-[6px] bg-black z-52"></div>

      <div 
        onClick={handleMusicToggle}
        className="absolute top-[95%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[300px] z-53 cursor-pointer active:scale-95 transition-transform"
      >
        <img 
          src={music_Player} 
          alt="music player" 
          style={{ imageRendering: 'pixelated' }} 
          className={isPlaying ? "animate-pulse" : ""}
        />
        
      </div>
    </>
  );
}

export default Intro;