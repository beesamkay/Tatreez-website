import { useCallback } from "react";
import LocationGazaBottom from "../components/LocationGazaBottom";
import FrameComponent9 from "../components/FrameComponent9";
import { useNavigate } from "react-router-dom";
import "./ramallah.css";

const Ramallah = () => {
  const navigate = useNavigate();

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <div className="ramallah8">
      <img className="image-3-icon7" alt="" src="/image-3@2x.png" />
      <h1 className="h11">مرحبا</h1>
      <h1 className="welcome3">WELCOME</h1>
      <div className="ramallah-item" />
      <div className="header1">
        <LocationGazaBottom />
        <div className="content">
          <FrameComponent9 />
          <div className="footer1">
            <img className="footer-item" alt="" src="/group-4.svg" />
            <img className="layer-1-icon4" alt="" src="/layer-1.svg" />
            <img
              className="sound-icon7"
              loading="lazy"
              alt=""
              src="/sound.svg"
            />
            <div className="side-menu6" onClick={onSideMenuContainerClick}>
              <div className="menu-items3" />
              <div className="menu-items4" />
              <div className="menu-items5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ramallah;
