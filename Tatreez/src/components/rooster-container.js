import PropTypes from "prop-types";
import "./rooster-container.css";

const RoosterContainer = ({ className = "" }) => {
  return (
    <div className={`rooster-container ${className}`}>
      <div className="rooster-inner">
        <a className="a33">600</a>
      </div>
      <a className="a34">904</a>
      <div className="rooster-container-inner">
        <div className="frame-parent59">
          <div className="frame-wrapper20">
            <div className="frame-parent60">
              <div className="parent4">
                <a className="a35">550</a>
                <div className="frame-parent61">
                  <div className="wrapper23">
                    <a className="a36">900</a>
                  </div>
                  <a className="a37">806</a>
                  <div className="wrapper24">
                    <a className="a38">945</a>
                  </div>
                </div>
              </div>
              <div className="wrapper25">
                <a className="a39">ديك</a>
              </div>
            </div>
          </div>
          <h1 className="colours-of-ramallah-container6">
            <span className="colours-of-ramallah-container7">
              <p className="colours-of5">Colours Of</p>
              <p className="colours-of5">Ramallah</p>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

RoosterContainer.propTypes = {
  className: PropTypes.string,
};

export default RoosterContainer;
