import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./frame-component1.css";

const FrameComponent1 = ({
  className = "",
  propPosition,
  propMargin,
  propTop,
  propLeft,
  tatreezOf,
  ramallah,
  propRight,
  propFlexDirection,
  key,
  onKeyImageClick,
  back,
  onNextTextClick,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      position: propPosition,
      margin: propMargin,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propMargin, propTop, propLeft]);

  const frameDiv3Style = useMemo(() => {
    return {
      right: propRight,
      flexDirection: propFlexDirection,
    };
  }, [propRight, propFlexDirection]);

  const navigate = useNavigate();

  const onKeyImageClick1 = useCallback(() => {
    navigate("/symbols-of-ramallah-4");
  }, [navigate]);

  return (
    <div
      className={`tatreez-of-ramallah-parent ${className}`}
      style={frameDiv2Style}
    >
      <h1 className="tatreez-of-ramallah-container4">
        <span>
          <p className="tatreez-of4">{tatreezOf}</p>
          <p className="tatreez-of4">{ramallah}</p>
        </span>
      </h1>
      <div className="key-parent8" style={frameDiv3Style}>
        <img
          className="key-icon21"
          alt=""
          src={key}
          onClick={onKeyImageClick}
        />
        <div className="back9" onClick={onNextTextClick}>
          {back}
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  tatreezOf: PropTypes.string,
  ramallah: PropTypes.string,
  key: PropTypes.string,
  back: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propMargin: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propRight: PropTypes.any,
  propFlexDirection: PropTypes.any,

  /** Action props */
  onKeyImageClick: PropTypes.func,
  onNextTextClick: PropTypes.func,
};

export default FrameComponent1;
