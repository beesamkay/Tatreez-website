import { useMemo } from "react";
import PropTypes from "prop-types";
import "./frame-component2.css";

const FrameComponent2 = ({
  className = "",
  propHeight,
  propPadding,
  bottomDivider,
  propWidth,
  rectangle56,
}) => {
  const frameDiv5Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const bottomDividerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`frame-parent67 ${className}`}>
      <div className="bottom-divider-wrapper" style={frameDiv5Style}>
        <div className="bottom-divider" style={bottomDividerStyle}>
          {bottomDivider}
        </div>
      </div>
      <img className="frame-child94" alt="" src={rectangle56} />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  bottomDivider: PropTypes.string,
  rectangle56: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent2;
