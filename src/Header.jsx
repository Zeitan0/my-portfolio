import React from 'react';

const Header = () => {
  // NEW: Smooth scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    const targetId = id.toLowerCase();
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Optional: Update URL without jumping
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] p-4">
      <nav className="bg-[#fff1f5] border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0021A5] border-2 border-black flex items-center justify-center">
            <span className="text-white font-['Press_Start_2P'] text-[10px]">ZL</span>
          </div>
          <h1 className="font-['Press_Start_2P'] text-[12px] text-black hidden md:block">
            ZENGTAO_PORTFOLIO
          </h1>
        </div>

        <ul className="flex gap-8 items-center">
          {['HOME', 'PROJECTS', 'ABOUT'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item)} // Added click handler
                className="font-['Press_Start_2P'] text-[10px] text-gray-700 hover:text-[#FA4616] hover:underline underline-offset-4 decoration-2 transition-colors cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}
          
          <li className="flex items-center gap-2 ml-4">
            <div className="w-3 h-3 bg-green-500 border-2 border-black animate-pulse" title="Online"></div>
            <span className="font-['Press_Start_2P'] text-[8px] text-gray-500">ONLINE</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;