import PropTypes from "prop-types";
import "./location-gaza-bottom.css";

const LocationGazaBottom = ({ className = "" }) => {
  return (
    <div className={`location-gaza-bottom ${className}`}>
      <div className="frame-parent45">
        <div className="frame-parent46">
          <div className="jaffa-container">
            <div className="jaffa4">Jaffa</div>
            <div className="frame-wrapper12">
              <div className="line-parent">
                <div className="frame-child74" />
                <div className="frame-wrapper13">
                  <div className="ramallah-container">
                    <div className="ramallah12">Ramallah</div>
                    <div className="line-wrapper1">
                      <div className="frame-child75" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper14">
            <div className="frame-parent47">
              <div className="gaza-frame">
                <div className="gaza4">Gaza</div>
              </div>
              <div className="frame-parent48">
                <div className="frame-parent49">
                  <div className="frame-wrapper15">
                    <div className="hebron-container">
                      <div className="hebron6">Hebron</div>
                      <div className="line-wrapper1">
                        <div className="frame-child75" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-child74" />
                </div>
                <div className="frame-wrapper16">
                  <div className="al-khalil-container">
                    <div className="al-khalil9">Al Khalil</div>
                    <div className="line-wrapper1">
                      <div className="frame-child75" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="beersheba-sinai-wrapper">
          <div className="beersheba-sinai-container2">
            <span>
              <p className="beersheba2">Beersheba</p>
              <p className="beersheba2">{`& Sinai`}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

LocationGazaBottom.propTypes = {
  className: PropTypes.string,
};

export default LocationGazaBottom;
