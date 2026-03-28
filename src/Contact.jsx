import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("READY");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("SENDING");
    setTimeout(() => setStatus("SENT"), 1500);
  };

  return (
    <div className="relative min-h-screen py-20 px-6 flex flex-col items-center justify-center bg-[#ffe4e6]">
      <div className="absolute top-0 left-0 w-full h-[6px] bg-black z-20 shadow-md"></div>

      <div className="w-full max-w-[700px] bg-white border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden z-10">
        <div className="bg-black text-white p-3 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 border border-white"></div>
            <div className="w-3 h-3 bg-yellow-500 border border-white"></div>
            <div className="w-3 h-3 bg-green-500 border border-white"></div>
          </div>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest">
            New_Message.exe
          </span>
          <div className="w-4"></div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-tighter" style={{ fontFamily: "'Press Start 2P', cursive" }}>
              User Name:
            </label>
            <input required type="text" className="w-full bg-gray-100 border-4 border-black p-3 font-mono text-sm outline-none focus:bg-white" placeholder="Enter ID..." />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-tighter" style={{ fontFamily: "'Press Start 2P', cursive" }}>
              Subject:
            </label>
            <input required type="text" className="w-full bg-gray-100 border-4 border-black p-3 font-mono text-sm outline-none focus:bg-white" placeholder="Message Title..." />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] md:text-xs font-bold uppercase tracking-tighter" style={{ fontFamily: "'Press Start 2P', cursive" }}>
              Transmission:
            </label>
            <textarea required rows="4" className="w-full bg-gray-100 border-4 border-black p-3 font-mono text-sm outline-none focus:bg-white resize-none" placeholder="Type your message here..."></textarea>
          </div>

          <button 
            type="submit"
            disabled={status !== "READY"}
            className={`w-full py-4 text-white text-[12px] md:text-[14px] uppercase transition-all active:scale-95 flex items-center justify-center gap-3
              ${status === "SENT" ? "bg-green-600" : "bg-black hover:bg-gray-800"}`}
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            {status === "READY" && "Send Transmission"}
            {status === "SENDING" && "Uploading..."}
            {status === "SENT" && "✓ Received"}
          </button>
        </form>
      </div>

      <div className="mt-20 w-full max-w-[700px] flex flex-col items-center gap-12 text-center">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 border-y-4 border-pink-200 py-10 w-full relative">
            <div className="flex flex-col gap-2">
                <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-pink-400">Lead Developer</span>
                <h4 className="text-[12px] text-pink-600 uppercase" style={{ fontFamily: "'Press Start 2P', cursive" }}>Zengtao</h4>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-pink-400">Art & Direction</span>
                <h4 className="text-[12px] text-pink-600 uppercase" style={{ fontFamily: "'Press Start 2P', cursive" }}>@Myself</h4>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-pink-400">Tech Stack</span>
                <h4 className="text-[10px] text-pink-500 font-mono font-bold">REACT / TAILWIND / ASEPRITE</h4>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-pink-400">Current Status</span>
                <h4 className="text-[10px] text-pink-500 font-mono font-bold animate-pulse tracking-widest">GAINESVILLE, FL // ONLINE</h4>
            </div>
        </div>

        <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-pink-500 animate-pulse shadow-[0_0_10px_rgba(244,114,182,0.6)]" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 35%, 80% 100%, 50% 80%, 20% 100%, 0% 35%)' }}></div>
                
                <p 
                className="text-pink-500 text-[9px] md:text-[11px] uppercase tracking-[0.2em] hover:scale-110 transition-transform cursor-default"
                style={{ fontFamily: "'Press Start 2P', cursive", textShadow: "2px 2px 0px rgba(0,0,0,0.05)" }}
                >
                made with fun with react
                </p>

                <div className="w-4 h-4 bg-pink-500 animate-pulse shadow-[0_0_10px_rgba(244,114,182,0.6)]" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 35%, 80% 100%, 50% 80%, 20% 100%, 0% 35%)' }}></div>
            </div>

            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-gray-400">
                System v3.0 // Game Clear
            </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-black"></div>
    </div>
  );
};

export default Contact;