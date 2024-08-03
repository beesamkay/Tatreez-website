import PropTypes from "prop-types";
import "./frame-component12.css";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <section className={`frame-parent52 ${className}`}>
      <div className="frame-wrapper19">
        <div className="cypress-title-parent">
          <div className="cypress-title">
            <div className="cypress-title-child" />
            <h2 className="cypress-tree1">Cypress tree</h2>
            <h2 className="h2">شجرة السرو</h2>
          </div>
          <div className="sound-wrapper1">
            <img
              className="sound-icon15"
              loading="lazy"
              alt=""
              src="/sound.svg"
            />
          </div>
        </div>
      </div>
      <div className="symbols-of-al-khalil-parent">
        <h1 className="symbols-of-al-container4">
          <span>
            <p className="symbols-of2">Symbols Of</p>
            <p className="symbols-of2">Al Khalil</p>
          </span>
        </h1>
        <div className="back-navigation">
          <div className="key-parent7">
            <img className="key-icon20" alt="" src="/key1@2x.png" />
            <div className="back8">Back</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
