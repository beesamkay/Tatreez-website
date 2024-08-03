import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./frame-component14.css";

const FrameComponent14 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onKeyImageClick = useCallback(() => {
    navigate("/tatreez-of-al-khalil-4");
  }, [navigate]);

  const onKeyImageClick1 = useCallback(() => {
    navigate("/symbols-of-al-khalil-3");
  }, [navigate]);

  return (
    <section className={`tatreez-of-al-khalil-1-inner ${className}`}>
      <div className="frame-parent63">
        <div className="frame-wrapper22">
          <div className="tatreez-of-al-khalil-group">
            <h1 className="tatreez-of-al-container2">
              <span>
                <p className="tatreez-of5">Tatreez Of</p>
                <p className="tatreez-of5">Al Khalil</p>
              </span>
            </h1>
            <div className="key-parent11">
              <img
                className="key-icon24"
                loading="lazy"
                alt=""
                src="/key-14@2x.png"
                onClick={onKeyImageClick}
              />
              <div className="next9">Next</div>
            </div>
            <div className="key-parent12">
              <img
                className="key-icon25"
                alt=""
                src="/key3@2x.png"
                onClick={onKeyImageClick1}
              />
              <div className="back11">Back</div>
            </div>
          </div>
        </div>
        <img className="sound-icon17" loading="lazy" alt="" src="/sound.svg" />
      </div>
    </section>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent14;
