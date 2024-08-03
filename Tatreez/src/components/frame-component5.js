import { useMemo } from "react";
import PropTypes from "prop-types";
import "./frame-component5.css";

const FrameComponent5 = ({
  className = "",
  propMarginTop,
  rectangle38,
  propHeight,
  propPadding,
  separator,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const separatorStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`symbols-of-al-khalil-1-inner2 ${className}`}
      style={frameDivStyle}
    >
      <div className="rectangle-parent13">
        <img className="frame-child79" alt="" src={rectangle38} />
        <div className="separator-wrapper" style={frameDiv1Style}>
          <a className="separator2" style={separatorStyle}>
            {separator}
          </a>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  rectangle38: PropTypes.string,
  separator: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent5;
