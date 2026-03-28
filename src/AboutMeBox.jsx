import React from 'react';
import personalImage from './assets/pixel_me.png';

const AboutMeBox = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-[500px] bg-[#fff1f5] border-[6px] border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
        
        <div className="absolute -top-6 left-6 bg-black text-white px-4 py-1 font-['Press_Start_2P'] text-[10px]">
          ABOUT ME
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-start">
            <div className="w-24 h-24 bg-white border-4 border-black flex items-center justify-center shrink-0">
               <img 
                    src={personalImage} 
                    alt="my_pixel_photo" 
                />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <h2 className="font-['Press_Start_2P'] text-lg text-[#0021A5]">ZENGTAO</h2>
              <p className="font-['Press_Start_2P'] text-[10px] text-gray-600">SOFTWARE DEVELOPER</p>
              
              <div className="w-full h-4 bg-gray-200 border-2 border-black relative">
                <div className="h-full bg-[#FA4616] w-[90%]" />
                <span className="absolute -right-2 -top-5 font-['Press_Start_2P'] text-[8px] text-black">HP: 100/100</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-4">
            <p className="font-['Press_Start_2P'] text-[10px] leading-loose text-gray-800">
Born in China and moving to the U.S. at 13, I faced the challenge of a completely new language and culture. Through persistence and curiosity, I turned this obstacle into a strength, developing resilience and adaptability. Today, I am a Computer Science junior at the University of Florida, thriving in a rigorous program and gaining hands-on experience in software development. Passionate about problem-solving and technology, I am eager to apply my skills and grow professionally in a Summer 2026 Software Engineering Internship.            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {['C++','Java','JavaScript','Rust','Git', 'R', 'SQL', 'MongoDB','React','Node', 'Tailwind', 'PixelArt', 'NLP'].map((skill) => (
              <span key={skill} className="bg-black text-white text-[8px] font-['Press_Start_2P'] px-2 py-1">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeBox;