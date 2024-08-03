import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./tatreez-of-al-khalil1.css";

const TatreezOfAlKhalil1 = () => {
  const navigate = useNavigate();

  const onKeyImageClick = useCallback(() => {
    navigate("/tatreez-of-al-khalil-1");
  }, [navigate]);

  const onKeyImageClick1 = useCallback(() => {
    navigate("/tatreez-of-al-khalil-5");
  }, [navigate]);

  return (
    <div className="tatreez-of-al-khalil-4">
      <img className="image-3-icon6" alt="" src="/image-3@2x.png" />
      <div className="screenshot-2024-08-02-at-1049-parent">
        <img
          className="screenshot-2024-08-02-at-1049"
          alt=""
          src="/screenshot-20240802-at-104902pm-1@2x.png"
        />
        <div className="header">
          <div className="tatreez-of-al-khalil-parent">
            <h1 className="tatreez-of-al-container">
              <span>
                <p className="tatreez-of1">Tatreez Of</p>
                <p className="tatreez-of1">Al Khalil</p>
              </span>
            </h1>
            <div className="key-group">
              <img
                className="key-icon6"
                alt=""
                src="/key-2@2x.png"
                onClick={onKeyImageClick}
              />
              <div className="back1">Back</div>
            </div>
          </div>
        </div>
      </div>
      <div className="screenshot-2024-08-02-at-1049-wrapper">
        <img
          className="screenshot-2024-08-02-at-10491"
          alt=""
          src="/screenshot-20240802-at-104918pm-1@2x.png"
        />
      </div>
      <div className="footer">
        <img className="footer-child" alt="" src="/group-4.svg" />
        <img className="sound-icon6" alt="" src="/sound.svg" />
        <img
          className="screenshot-2024-08-02-at-10492"
          loading="lazy"
          alt=""
          src="/screenshot-20240802-at-104927pm-2@2x.png"
        />
        <div className="rectangle-parent5">
          <div className="frame-child25" />
          <div className="frame-child26" />
          <div className="frame-child27" />
        </div>
        <div className="key-container">
          <img
            className="key-icon7"
            loading="lazy"
            alt=""
            src="/key-12@2x.png"
            onClick={onKeyImageClick1}
          />
          <div className="next1">Next</div>
        </div>
      </div>
    </div>
  );
};

export default TatreezOfAlKhalil1;
