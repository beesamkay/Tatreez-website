import PropTypes from "prop-types";
import "./frame-component10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent17 ${className}`}>
      <img
        className="frame-child87"
        loading="lazy"
        alt=""
        src="/rectangle-37@2x.png"
      />
      <div className="rectangle-wrapper3">
        <img
          className="frame-child88"
          loading="lazy"
          alt=""
          src="/rectangle-57@2x.png"
        />
      </div>
      <div className="frame-wrapper21">
        <div className="frame-parent62">
          <div className="rectangle-wrapper4">
            <img
              className="frame-child89"
              loading="lazy"
              alt=""
              src="/rectangle-54@2x.png"
            />
          </div>
          <img
            className="frame-child90"
            loading="lazy"
            alt=""
            src="/rectangle-56@2x.png"
          />
          <img
            className="frame-child90"
            loading="lazy"
            alt=""
            src="/rectangle-55@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
