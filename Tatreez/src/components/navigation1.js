import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./navigation1.css";

const Navigation1 = ({
  className = "",
  propMinWidth,
  propPosition,
  propTop,
  propLeft,
  key,
  propWidth,
  propPadding,
  key1,
}) => {
  const navigationStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propMinWidth, propPosition, propTop, propLeft]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const navigate = useNavigate();

  const onKeyImageClick = useCallback(() => {
    navigate("/symbols-of-ramallah-4");
  }, [navigate]);

  const onKeyImageClick1 = useCallback(() => {
    navigate("/symbols-of-ramallah-2");
  }, [navigate]);

  return (
    <div className={`navigation2 ${className}`} style={navigationStyle}>
      <div className="symbols-of-ramallah-parent">
        <h1 className="symbols-of-ramallah-container">
          <span>
            <p className="symbols-of3">Symbols Of</p>
            <p className="symbols-of3">Ramallah</p>
          </span>
        </h1>
        <div className="key-parent9">
          <img
            className="key-icon22"
            loading="lazy"
            alt=""
            src={key}
            onClick={onKeyImageClick}
          />
          <div className="next8">Next</div>
        </div>
      </div>
      <div className="navigation-inner" style={frameDiv4Style}>
        <div className="key-parent10">
          <img
            className="key-icon23"
            alt=""
            src={key1}
            onClick={onKeyImageClick1}
          />
          <div className="back10">Back</div>
        </div>
      </div>
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
  key: PropTypes.string,
  key1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default Navigation1;
