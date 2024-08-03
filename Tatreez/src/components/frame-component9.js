import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./frame-component9.css";

const FrameComponent9 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRamallahClickTextClick = useCallback(() => {
    navigate("/colours-of-ramallah");
  }, [navigate]);

  return (
    <div className={`city-list-parent ${className}`}>
      <div className="city-list">
        <img className="footer-label-icon" alt="" src="/vector.svg" />
        <div className="jaffa5" />
        <div className="gaza5" />
        <div className="sinai5" />
        <div className="hebron7" />
        <div className="ramallah13" />
        <div className="al-khalil10" />
      </div>
      <div className="jaffa-parent1">
        <div className="jaffa6">Jaffa</div>
        <div className="ramallah-click-wrapper">
          <div className="ramallah-click" onClick={onRamallahClickTextClick}>
            Ramallah (click)
          </div>
        </div>
      </div>
      <div className="frame-wrapper17">
        <div className="frame-parent50">
          <div className="gaza-wrapper1">
            <div className="gaza6">Gaza</div>
          </div>
          <div className="hebron-parent1">
            <div className="hebron8">Hebron</div>
            <div className="frame-wrapper18">
              <div className="frame-parent51">
                <div className="al-khalil-wrapper">
                  <div className="al-khalil11">Al Khalil</div>
                </div>
                <div className="beersheba-sinai-container3">
                  <span>
                    <p className="beersheba3">Beersheba</p>
                    <p className="beersheba3">{`& Sinai`}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
