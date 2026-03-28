import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import gatorStand from "./assets/gatorStand.png";
import gatorHug from "./assets/gatorHug.png";
import gatorHeart from "./assets/gatorHeart.png";
import PixelChat from "./PixelChat";
import BigPixelMenu from "./BigPixelMenu";
function Gator() {
  const [stage, setStage] = useState("closed");
  const gatorRef = useRef();

  let currentImage = gatorStand;
  if (stage === "mid") currentImage = gatorHug;
  if (stage === "open") currentImage = gatorHeart;

  const handleClick = () => {
    if (stage === "closed") {
      setStage("mid");
    }
  };

  useEffect(() => {
    let timeout;
    if (stage === "mid") {
      timeout = setTimeout(() => {
        setStage("open");
      }, 250);
    }
    return () => clearTimeout(timeout);
  }, [stage]);

  useEffect(() => {
    let timeout;
    if (stage === "open") {
      gsap.fromTo(
        gatorRef.current,
        { scale: 0.9 },
        { scale: 1.1, duration: 0.2, yoyo: true, repeat: 2 }
      );
      timeout = setTimeout(() => {
        setStage("closed");
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [stage]);

  return (
    <div className="relative flex flex-col items-center">
      
      <div className="absolute bottom-[15vh] left-[0vw] -translate-y-1/2 flex flex-col items-start z-20 pointer-events-none">
        <PixelChat text="  Hi, I'm Zengtao!
        A Computer Science Student from UF,
        Welcome to my porfolio website,
        Go Gators!" />
      </div>

      <div className="absolute top-[140%] left-[450%] -translate-y-1/2 flex flex-col items-start z-20">
<BigPixelMenu />
</div>


<div className="transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-8 cursor-pointer">
        <img
          ref={gatorRef}
          src={currentImage}
          alt="gator"
          onClick={handleClick}
          className="w-40 md:w-64" // Keeps the size consistent
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
    </div>
  );
}

export default Gator;