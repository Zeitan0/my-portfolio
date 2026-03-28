import React, { useState, useEffect } from "react";
import "./PixelChat.css";

const PixelChat = ({ text = "HI, I'M ZENGTAO!", speed = 60 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText(""); 
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <div className="relative mb-6 animate-bounce-subtle w-max max-w-[80vw]">
      <div className="bg-white border-[4px] border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <p 
          className="text-black uppercase"
          style={{ 
            fontSize: 'clamp(14px, 2vw, 24px)', 
            fontFamily: "'Press Start 2P', cursive", 
            lineHeight: '1.8',
            letterSpacing: '0px',
            wordBreak: 'break-word',
            margin: 0
          }}
        >
          {displayedText}
          <span className="inline-block w-[0.6em] h-[0.9em] bg-black ml-2 animate-pulse align-middle"></span>
        </p>
      </div>
      <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white border-r-[4px] border-b-[4px] border-black rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
    </div>
  );
};

export default PixelChat;