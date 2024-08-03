import PropTypes from "prop-types";
import "./frame-component7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper23 ${className}`}>
      <div className="frame-parent65">
        <div className="frame-wrapper24">
          <div className="parent6">
            <a className="a46">550</a>
            <div className="frame-parent66">
              <div className="wrapper27">
                <a className="a47">900</a>
              </div>
              <div className="wrapper28">
                <a className="a48">945</a>
              </div>
              <a className="a49">806</a>
            </div>
          </div>
        </div>
        <h1 className="colours-of-ramallah-container10">
          <span className="colours-of-ramallah-container11">
            <p className="colours-of7">Colours Of</p>
            <p className="colours-of7">Ramallah</p>
          </span>
        </h1>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
