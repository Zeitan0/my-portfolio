import Parallax from "./Parallax";
import Intro from "./Intro";
import Header from "./Header";
import Project from "./Project";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div style={{ position: "relative", height: "100vh" }}>
        <Parallax />
      </div>

      <section 
        style={{ 
          position: "relative", 
          width: "100%", 
          background: "linear-gradient(135deg, #fff1f5, #ffe4e6)",
          minHeight: "100vh"
        }}
      >
        <Intro />
      </section>

      <section 
        style={{ 
          position: "relative", 
          zIndex: 50, 
          width: "100%", 
          backgroundColor: "#5E70A0",
          height: "10vh"
        }}
      >
      </section>

      <section 
        style={{ 
          position: "relative", 
          zIndex: 51, 
          width: "100%", 
          background: "linear-gradient(135deg, #fff1f5, #ffe4e6)",
          minHeight: "100vh"
        }}
      >
        <Project />
      </section>

      <section 
        style={{ 
          position: "relative", 
          zIndex: 51, 
          width: "100%", 
          background: "linear-gradient(135deg, #fff1f5, #ffe4e6)",
          minHeight: "100vh"
        }}
      >
        <Contact />
      </section>
    </>
  );
}
export default App;