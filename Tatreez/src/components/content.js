import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./content.css";

const Content = ({ className = "" }) => {
  const navigate = useNavigate();

  const onKeyImageClick = useCallback(() => {
    navigate("/colours-of-ramallah");
  }, [navigate]);

  return (
    <section className={`content2 ${className}`}>
      <div className="animal">
        <div className="animal-info">
          <div className="animal-name">
            <div className="animal-icon" />
            <div className="rooster6">Rooster</div>
            <div className="animal-translation">
              <div className="div17">ديك</div>
            </div>
          </div>
        </div>
        <div className="sound-control1">
          <img
            className="sound-icon20"
            loading="lazy"
            alt=""
            src="/sound.svg"
          />
          <div className="sound-control-inner">
            <img className="frame-child93" alt="" src="/group-5.svg" />
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="back-navigation1">
          <h1 className="symbols-of-ramallah-container1">
            <span>
              <p className="symbols-of4">Symbols Of</p>
              <p className="symbols-of4">Ramallah</p>
            </span>
          </h1>
          <div className="back-button">
            <img
              className="key-icon28"
              alt=""
              src="/key1@2x.png"
              onClick={onKeyImageClick}
            />
            <div className="back13">Back</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
