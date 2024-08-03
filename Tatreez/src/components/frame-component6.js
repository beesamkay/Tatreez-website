import PropTypes from "prop-types";
import "./frame-component6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`frame-parent58 ${className}`}>
      <div className="rectangle-wrapper1">
        <img
          className="frame-child80"
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </div>
      <div className="rectangle-parent14">
        <img
          className="frame-child81"
          loading="lazy"
          alt=""
          src="/rectangle-48@2x.png"
        />
        <img
          className="frame-child82"
          loading="lazy"
          alt=""
          src="/rectangle-51@2x.png"
        />
      </div>
      <div className="rectangle-wrapper2">
        <img
          className="frame-child83"
          loading="lazy"
          alt=""
          src="/rectangle-50@2x.png"
        />
      </div>
      <img
        className="shape-element-icon"
        loading="lazy"
        alt=""
        src="/rectangle-53@2x.png"
      />
      <img
        className="shape-element-icon"
        loading="lazy"
        alt=""
        src="/rectangle-52@2x.png"
      />
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
