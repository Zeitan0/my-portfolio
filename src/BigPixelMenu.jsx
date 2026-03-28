import React from 'react';
import linkedinIcon from './assets/linkedin.png'; 
import gmailIcon from './assets/gmail.png';
import gitHubIcon from './assets/github.png';

const BigPixelMenu = () => {
  
  const handleGmailClick = () => {
    window.location.href = "mailto:zengtao0313@Gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/zengtao-l-0311722a9/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/Zeitan0", "_blank");
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <div className="bg-[#fff1f5] border-[6px] border-black p-8 shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-8 items-center">
        
        <div className="flex gap-6">
          <div 
            onClick={handleLinkedInClick}
            className="w-24 h-24 bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer hover:bg-[#0021A5] group transition-all"
          >
            <img 
              src={linkedinIcon} 
              alt="LinkedIn" 
              className="w-16 h-16 [image-rendering:pixelated] object-contain group-hover:invert transition-all" 
            />
          </div>

          <div 
            onClick={handleGmailClick}
            className="w-24 h-24 bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer hover:bg-[#FA4616] group transition-all"
          >
            <img 
              src={gmailIcon} 
              alt="Gmail" 
              className="w-16 h-16 [image-rendering:pixelated] object-contain group-hover:invert transition-all" 
            />
          </div>

          <div 
            onClick={handleGitHubClick}
            className="w-24 h-24 bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer hover:bg-[#333] group transition-all"
          >
            <img 
              src={gitHubIcon} 
              alt="GitHub" 
              className="w-16 h-16 [image-rendering:pixelated] object-contain group-hover:invert transition-all" 
            />
          </div>
        </div>

    <a 
  href="Zengtao_Liang_Resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="block w-full cursor-pointer"
>
        <button 
          className="w-full bg-[#0021A5] hover:bg-[#FA4616] text-white border-[4px] border-black py-5 px-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
        >
          <span className="font-['Press_Start_2P'] text-lg tracking-tighter">
            RESUME
          </span>
        </button>
        </a>
      </div>
    </div>
  );
};

export default BigPixelMenu;