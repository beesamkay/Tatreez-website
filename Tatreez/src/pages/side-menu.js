import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./side-menu.css";

const SideMenu = () => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMapContainerClick = useCallback(() => {
    navigate("/map-hover");
  }, [navigate]);

  const onRamallahContainerClick = useCallback(() => {
    navigate("/colours-of-ramallah");
  }, [navigate]);

  const onAlKhalilContainerClick = useCallback(() => {
    navigate("/colours-of-al-khalil");
  }, [navigate]);

  return (
    <div className="side-menu2">
      <div className="frame-parent10">
        <img className="frame-child3" alt="" src="/group-4.svg" />
        <img className="sound-icon4" loading="lazy" alt="" src="/sound.svg" />
        <div className="customer-verified" />
      </div>
      <div className="frame-parent11">
        <div className="donelight-parent">
          <div className="donelight" />
          <div className="frame-child4" />
          <div className="frame-child5" />
          <div className="rectangle-parent">
            <div className="frame-child6" />
            <a className="side-menu3">Side menu</a>
          </div>
        </div>
        <div className="home" onClick={onHomeContainerClick}>
          <div className="home-child" />
          <a className="home1">Home</a>
        </div>
      </div>
      <div className="map" onClick={onMapContainerClick}>
        <div className="home-child" />
        <a className="map1">Map</a>
      </div>
      <div className="map" onClick={onRamallahContainerClick}>
        <div className="home-child" />
        <a className="ramallah5">Ramallah</a>
      </div>
      <div className="al-khalil2" onClick={onAlKhalilContainerClick}>
        <div className="home-child" />
        <a className="al-khalil3">Al khalil</a>
      </div>
    </div>
  );
};

export default SideMenu;
