import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./components/Routes";
import Navbar from "./components/Navbar";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  return (
    <>
      {isMobile ? (
        <div className="mobile-message">
          Please open this website in desktop view for the best experience.
        </div>
      ) : (
        <div className="system-content">
          <>
            <BrowserRouter>
              <div id="cursor"></div>
              <Navbar />
              <RoutesComponent />
            </BrowserRouter>
          </>
        </div>
      )}
    </>
  );
}

export default App;
