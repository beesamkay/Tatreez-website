import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./frame-component11.css";

const FrameComponent11 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/colours-of-al-khalil1");
  }, [navigate]);

  const onNextTextClick = useCallback(() => {
    navigate("/symbols-of-al-khalil-2");
  }, [navigate]);

  return (
    <section className={`sound-control-wrapper ${className}`}>
      <div className="sound-control">
        <div className="sound-frame">
          <img
            className="sound-icon14"
            loading="lazy"
            alt=""
            src="/sound.svg"
          />
        </div>
        <div className="key-control">
          <div className="keys">
            <img className="key-icon18" alt="" src="/key1@2x.png" />
            <div className="back7" onClick={onBackTextClick}>
              Back
            </div>
          </div>
          <div className="keys1">
            <img
              className="key-icon19"
              loading="lazy"
              alt=""
              src="/key-11@2x.png"
            />
            <div className="next7" onClick={onNextTextClick}>
              Next
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
