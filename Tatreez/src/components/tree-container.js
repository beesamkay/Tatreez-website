import Navigation1 from "./Navigation1";
import PropTypes from "prop-types";
import "./tree-container.css";

const TreeContainer = ({ className = "" }) => {
  return (
    <section className={`tree-container ${className}`}>
      <div className="tree-content">
        <div className="tree-elements">
          <div className="cypres-container">
            <div className="rectangle-parent15">
              <div className="frame-child84" />
              <div className="cypres-tree3">Cypres tree</div>
              <div className="div14">شجرة السرو</div>
            </div>
          </div>
          <div className="sound-container1">
            <div className="sound-element">
              <img
                className="sound-icon16"
                loading="lazy"
                alt=""
                src="/sound.svg"
              />
            </div>
            <div className="rectangle-parent16">
              <div className="frame-child85" />
              <div className="cypres-tree4">Cypres tree</div>
              <div className="div15">شجرة السرو</div>
              <img className="frame-child86" alt="" src="/group-61.svg" />
            </div>
          </div>
        </div>
      </div>
      <Navigation1 key="/key-13@2x.png" key1="/key2@2x.png" />
    </section>
  );
};

TreeContainer.propTypes = {
  className: PropTypes.string,
};

export default TreeContainer;
