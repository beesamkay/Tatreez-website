import Navigation1 from "./Navigation1";
import PropTypes from "prop-types";
import "./navigation2.css";

const Navigation2 = ({ className = "" }) => {
  return (
    <section className={`navigation3 ${className}`}>
      <div className="navigation-content">
        <div className="navigation-elements">
          <img
            className="img-20211225-112822-480x4802x-icon1"
            alt=""
            src="/img-20211225-112822-480x4802x@2x.png"
          />
          <img
            className="sound-icon19"
            loading="lazy"
            alt=""
            src="/sound.svg"
          />
          <div className="moon-feathers3">
            <div className="moon-feathers-content1">
              <div className="moon-feathers-image1" />
              <div className="moon-feathers4">Moon feathers</div>
            </div>
            <div className="moon-feathers-arabic">
              <div className="div16">ريشة القمر</div>
            </div>
          </div>
        </div>
        <Navigation1
          propMinWidth="unset"
          propPosition="absolute"
          propTop="21px"
          propLeft="609px"
          key="/key-13@2x.png"
          propWidth="389px"
          propPadding="unset"
          key1="/key4@2x.png"
        />
      </div>
    </section>
  );
};

Navigation2.propTypes = {
  className: PropTypes.string,
};

export default Navigation2;
