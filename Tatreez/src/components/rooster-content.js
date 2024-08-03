import PropTypes from "prop-types";
import "./rooster-content.css";

const RoosterContent = ({ className = "" }) => {
  return (
    <div className={`rooster-content ${className}`}>
      <div className="rooster-details">
        <div className="rooster-name-wrapper">
          <div className="rooster-name1">
            <div className="rooster-name-english">
              <a className="a40">600</a>
              <div className="rooster-name-arabic">
                <a className="a41">904</a>
              </div>
              <div className="rooster-description1">
                <div className="parent5">
                  <a className="a42">550</a>
                  <div className="rooster-description-arabic">
                    <a className="a43">806</a>
                  </div>
                </div>
              </div>
              <div className="rooster-origin">
                <a className="a44">945</a>
              </div>
            </div>
            <div className="rooster-image1">
              <div className="rooster-image-content">
                <div className="rooster-image-details">
                  <a className="rooster5">Rooster</a>
                  <div className="rooster-image-arabic">
                    <a className="a45">ديك</a>
                  </div>
                  <img
                    className="rooster-image-details-child"
                    alt=""
                    src="/group-5.svg"
                  />
                </div>
                <div className="cypress-tree-description">
                  <a className="cypres-tree5">Cypres tree</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="colours-of-ramallah-container8">
          <span className="colours-of-ramallah-container9">
            <p className="colours-of6">Colours Of</p>
            <p className="colours-of6">Ramallah</p>
          </span>
        </h1>
      </div>
    </div>
  );
};

RoosterContent.propTypes = {
  className: PropTypes.string,
};

export default RoosterContent;
