import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./tatreez-of-al-khalil2.css";

const TatreezOfAlKhalil2 = () => {
  const navigate = useNavigate();

  const onKeyImageClick = useCallback(() => {
    navigate("/tatreez-of-al-khalil-4");
  }, [navigate]);

  return (
    <div className="tatreez-of-al-khalil-5">
      <img className="image-3-icon10" alt="" src="/image-3@2x.png" />
      <header className="layer-1-group">
        <img
          className="layer-1-icon5"
          loading="lazy"
          alt=""
          src="/layer-1.svg"
        />
        <a className="map2">Map</a>
        <div className="frame-child29" />
        <div className="frame-child30" />
        <div className="frame-child31" />
      </header>
      <div className="frame-parent19">
        <img className="frame-child32" alt="" src="/group-4.svg" />
        <div className="screenshot-2024-08-02-at-1049-group">
          <img
            className="screenshot-2024-08-02-at-10493"
            alt=""
            src="/screenshot-20240802-at-104902pm-1@2x.png"
          />
          <img
            className="screenshot-2024-08-02-at-10494"
            alt=""
            src="/screenshot-20240802-at-104927pm-1@2x.png"
          />
        </div>
        <img className="sound-icon9" loading="lazy" alt="" src="/sound.svg" />
        <img
          className="screenshot-2024-08-02-at-10495"
          alt=""
          src="/screenshot-20240802-at-104918pm-2@2x.png"
        />
        <div className="key-parent2">
          <img
            className="key-icon10"
            loading="lazy"
            alt=""
            src="/key-2@2x.png"
            onClick={onKeyImageClick}
          />
          <div className="back2">Back</div>
        </div>
      </div>
      <div className="tatreez-of-al-khalil-wrapper">
        <h1 className="tatreez-of-al-container1">
          <span>
            <p className="tatreez-of2">Tatreez Of</p>
            <p className="tatreez-of2">Al Khalil</p>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TatreezOfAlKhalil2;
