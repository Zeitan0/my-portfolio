import React, { useState } from "react";
import wadImage from "./assets/WadFile.png";
import pixelPor from "./assets/PixelPor.png";
import taskManagement from "./assets/TaskManagementWeb.png";
import XML from "./assets/XML-File.png";
import Lua from "./assets/Lua.webp";
import MaxWash from "./assets/Max Wash.png";
import ppPad from "./assets/ppPad.png";

const projects = [
  { id: 1, title: "FUSE-Based WAD File System", image: wadImage, tech: "C++ / linux", github: "https://github.com/Zeitan0/Wad-File-FUSE-System", fullDesc: "File management project that implements a custom file system for WAD files using Linux's FUSE (Filesystem in Userspace) software." },
  { id: 2, title: "Pixel Portfolio", image: pixelPor, tech: "React / Tailwind", github: "https://github.com/Zeitan0/my-portfolio", fullDesc: "A digital environment with parallax effects and Aseprite animations. Showcase of React proficiency." },
  { id: 3, title: "Task Management Web", image: taskManagement, tech: "React / Node / MongoDB", github: "https://github.com/Zeitan0/Task-Management-Web", fullDesc: "A full-stack web application designed to help users efficiently manage their daily tasks and projects" },
  { id: 4, title: "XML File Reader", image: XML, tech: "C++ / HTML", github: "https://github.com/Zeitan0/xml-File-Reader?tab=readme-ov-file", fullDesc: "A lightweight tool for parsing and reading XML files. Supports navigating XML nodes, extracting attributes, and converting XML data into usable formats for further processing." },
  { id: 5, title: "Lua interpreter", image: Lua, tech: "Rust", github: "https://github.com/Zeitan0/Lua-interpreter", fullDesc: "A lightweight Lua interpreter implemented in Rust. It executes Lua scripts efficiently, supports core Lua features, and can be embedded into Rust projects to provide scripting capabilities." },
  { id: 6, title: "Max Wash", image: MaxWash, tech: "Unity / C#", github: "https://github.com/Zeitan0/", fullDesc: "A self-made car wash simulation game built in Unity. Players manage cars through washing, drying, and detailing processes, improving efficiency and earning points. Features include interactive gameplay, retro-inspired UI, and a progression system for unlocking upgrades." }
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return (
      <div 
        className="relative min-h-screen p-6 md:p-16 animate-in fade-in zoom-in-95 duration-300 flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(135deg, #fff1f5, #ffe4e6)" }}
      >

        
        <div className="w-full max-w-[1200px] bg-white border-[6px] border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden">
          
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <button 
              onClick={() => setSelectedProject(null)}
              className="text-[10px] font-bold uppercase border-2 border-white px-3 py-1 hover:bg-white hover:text-black transition-all"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              ← Close_File
            </button>
            <span className="font-mono text-[10px] uppercase tracking-widest hidden md:block">
              Mission_ID: 0{selectedProject.id}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black bg-gray-50 aspect-video lg:aspect-auto flex items-center justify-center">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-between space-y-8">
              <div>
                <h2 className="text-xl md:text-3xl font-black uppercase mb-6 leading-tight" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                  {selectedProject.title}
                </h2>
                <div className="flex gap-2 mb-8">
                   <span className="bg-black text-white text-[9px] px-2 py-1 uppercase font-mono tracking-tighter">Stack: {selectedProject.tech}</span>
                   <span className="bg-green-100 text-green-700 text-[9px] px-2 py-1 uppercase font-mono font-bold border border-green-200">Status: Completed</span>
                </div>
                
                <h3 className="font-mono font-bold text-xs uppercase mb-3 text-gray-400 tracking-[0.3em]">Briefing:</h3>
                <p className="font-mono text-sm md:text-base leading-relaxed text-gray-700 bg-gray-50 p-4 border-l-4 border-black">
                  {selectedProject.fullDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-black text-white text-center px-6 py-4 text-[10px] uppercase hover:bg-pink-500 transition-colors"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  Source Code ↗
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="border-4 border-black px-6 py-4 text-[10px] font-bold uppercase hover:bg-gray-100 transition-colors"
                >
                  Back to Missions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative min-h-screen py-20 px-8 flex flex-col items-center animate-in fade-in duration-500"
      style={{ background: "linear-gradient(135deg, #fff1f5, #ffe4e6)" }}
    >

  
  <div className="absolute bottom-[-10vh] left-[8vw] -translate-y-1/2 w-12 md:w-50 z-1 rotate-150 pointer-events-none">
    <img 
      src={ppPad} 
      alt="pp Pad" 
      className="w-40 h-auto object-contain"
      style={{ imageRendering: 'pixelated' }}
    />
  </div>

    <div className="absolute bottom-[-10vh] right-[7vw] -translate-y-1/2 w-12 md:w-50 z-1 rotate-330 pointer-events-none">
    <img 
      src={ppPad} 
      alt="pp Pad" 
      className="w-40 h-auto object-contain"
      style={{ imageRendering: 'pixelated' }}
    />
  </div>
  

      <div className="absolute top-0 left-0 w-full h-[6px] bg-black z-20 shadow-md"></div>

      <h2 className="text-black mb-16 text-center uppercase tracking-[0.2em]"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: 'clamp(18px, 3vw, 32px)' }}>
        Recent Missions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1200px]">
        {projects.map((proj) => (
          <div 
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="group relative bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 cursor-pointer flex flex-col overflow-hidden"
          >
            <div className="w-full aspect-video border-b-[4px] border-black overflow-hidden bg-gray-100">
              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" style={{ imageRendering: 'pixelated' }} />
            </div>
            <div className="p-5 flex flex-col bg-white">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-black text-[10px] md:text-[11px] font-bold uppercase tracking-tighter" style={{ fontFamily: "'Press Start 2P', cursive" }}>{proj.title}</h3>
                <span className="text-[10px] font-mono text-gray-400">#0{proj.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="bg-gray-100 border border-black/10 text-black text-[9px] px-2 py-1 font-mono uppercase font-bold">{proj.tech}</span>
                <span className="text-[9px] font-bold uppercase border-b-2 border-black group-hover:bg-black group-hover:text-white transition-colors p-1">Enter</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-black"></div>
    </div>
  );
};

export default Project;