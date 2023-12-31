import React, { useState, useEffect } from "react";
import "../AppNotif/AppNotif.scss";
import { SiTarget } from "react-icons/si";
import { LiaTimesSolid } from "react-icons/lia";

const AppNotif = ({ setIsHidden }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="app-notif">
      <div className="left">
        <SiTarget className="icon" />
        <p>Switch to the app ?</p>
      </div>

      <div className="right">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Open app
        </a>

        <LiaTimesSolid onClick={() => setIsHidden(false)} />
      </div>
    </div>
  );
};

export default AppNotif;
