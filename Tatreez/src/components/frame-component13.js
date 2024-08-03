import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./frame-component13.css";

const FrameComponent13 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onKeyImageClick = useCallback(() => {
    navigate("/symbols-of-al-khalil-2");
  }, [navigate]);

  const onKeyImageClick1 = useCallback(() => {
    navigate("/tatreez-of-al-khalil-1");
  }, [navigate]);

  return (
    <section className={`frame-parent64 ${className}`}>
      <div className="rectangle-parent18">
        <div className="frame-child92" />
        <h2 className="pashas-tent">Pasha’s tent</h2>
        <div className="wrapper26">
          <h2 className="h21">خيمة الباشا</h2>
        </div>
      </div>
      <div className="screenshot-elements-wrapper">
        <footer className="screenshot-elements">
          <img
            className="screenshot-2024-08-02-at-10498"
            alt=""
            src="/screenshot-20240802-at-104902pm-1@2x.png"
          />
          <img
            className="sound-icon18"
            loading="lazy"
            alt=""
            src="/sound.svg"
          />
          <div className="navigation-keys">
            <div className="key-icons">
              <img
                className="key-icon26"
                alt=""
                src="/key3@2x.png"
                onClick={onKeyImageClick}
              />
              <div className="back12">Back</div>
            </div>
            <div className="key-icons1">
              <img
                className="key-icon27"
                loading="lazy"
                alt=""
                src="/key-14@2x.png"
                onClick={onKeyImageClick1}
              />
              <div className="next10">Next</div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
