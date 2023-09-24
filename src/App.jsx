import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNotif from "./Components/AppNotif/AppNotif";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Router>
        <div>
          {isMobile && isHidden ? <AppNotif setIsHidden={setIsHidden} /> : null}
          <Navbar />
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
          <p>dddd</p>
        </div>
      </Router>
    </>
  );
}

export default App;
