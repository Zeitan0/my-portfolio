import "./Parallax.css";
import { useEffect, useRef } from "react";
import Gator from "./Gator";
import PixelChat from "./PixelChat";
import BigPixelMenu from "./BigPixelMenu";
import layer1 from "./assets/1.png";
import layer2 from "./assets/2.png";
import layer3 from "./assets/3.png";
import layer4 from "./assets/4.png";
import layer5 from "./assets/6.png";
import personAnimation from "./assets/7.gif";
import dinoAnimation from "./assets/8.gif";


function Parallax() {
  const bgRef = useRef(null);

  useEffect(() => {
    const layers = bgRef.current.querySelectorAll(".parallax");

    const handleMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;

      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed);

        layer.style.transform = `
          translate(${x * speed}px, ${y * speed/2}px)
        `;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div ref={bgRef} className="background">
        <img src={layer1} className="parallax layer" data-speed="0.0" />
        <img src={layer2} className="parallax layer" data-speed="0.03" />
        <img src={layer3} className="parallax layer" data-speed="0.05" />
        <img src={layer4} className="parallax layer" data-speed="0.08" />
      </div>

      <div className="scroll-layer">
    <img src={layer5} />
    <img src={layer5} />
  </div>


<div className="absolute top-[81vh] left-[45vw] -translate-y-1/2 -scale-x-100 w-20 md:w-32 z-11 pointer-events-none">
  <img 
    src={personAnimation} 
    alt="Person walking" 
    className="w-full h-auto" 
  />
</div>


<div className="absolute top-[87vh] left-[40vw] -translate-y-1/2 w-12 md:w-16 z-1 pointer-events-none">
  <img 
    src={dinoAnimation} 
    alt="Dino walking" 
    className="w-full h-auto" 
  />
</div>

<div className="absolute top-[47vh] left-[15vw] -translate-y-1/2 z-10">
  <Gator />
</div>
</>

  );
}

export default Parallax;
