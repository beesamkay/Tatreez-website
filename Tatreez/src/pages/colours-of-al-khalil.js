import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import "./colours-of-al-khalil.css";

const ColoursOfAlKhalil = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/colours-of-al-khalil1");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/map-hover");
  }, [navigate]);

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <div className="colours-of-al-khalil1">
      <img className="image-3-icon19" alt="" src="/image-3@2x.png" />
      <main className="top-navigation">
        <div className="top-navigation-inner">
          <div className="frame-parent41">
            <div className="divider-wrapper">
              <div className="divider">904</div>
            </div>
            <img
              className="frame-child66"
              loading="lazy"
              alt=""
              src="/rectangle-41@2x.png"
            />
          </div>
        </div>
        <div className="top-navigation-child">
          <div className="frame-parent42">
            <div className="wrapper19">
              <div className="div11">355</div>
            </div>
            <img
              className="frame-child66"
              loading="lazy"
              alt=""
              src="/rectangle-40@2x.png"
            />
          </div>
        </div>
        <section className="frame-parent43">
          <FrameComponent1
            propPosition="absolute"
            propMargin="0 !important"
            propTop="277.6px"
            propLeft="583px"
            tatreezOf="Colours Of"
            ramallah="Al Khalil"
            propRight="-28.2px"
            propFlexDirection="row"
            key="/key-13@2x.png"
            back="Next"
            onNextTextClick={onNextTextClick}
          />
          <div className="sound-controls1">
            <div className="sound-container">
              <img
                className="sound-icon13"
                loading="lazy"
                alt=""
                src="/sound.svg"
              />
            </div>
            <div className="content-area">
              <div className="main-content">
                <div className="interactive-elements">
                  <div className="interactive-divider">815</div>
                  <div className="interactive-divider1">
                    <div className="small-divider">900</div>
                  </div>
                  <div className="interactive-divider2">
                    <div className="small-divider">601</div>
                  </div>
                  <div className="description">
                    <div className="div13">550</div>
                  </div>
                  <div className="interactive-divider3">640</div>
                </div>
              </div>
              <div className="rectangle-parent11">
                <img
                  className="frame-child68"
                  loading="lazy"
                  alt=""
                  src="/rectangle-39@2x.png"
                />
                <div className="rectangle-parent12">
                  <img
                    className="frame-child69"
                    loading="lazy"
                    alt=""
                    src="/rectangle-38@2x.png"
                  />
                  <img
                    className="frame-child69"
                    loading="lazy"
                    alt=""
                    src="/rectangle-371@2x.png"
                  />
                </div>
                <div className="rectangle-wrapper">
                  <img
                    className="frame-child71"
                    loading="lazy"
                    alt=""
                    src="/rectangle-57@2x.png"
                  />
                </div>
                <div className="rectangle-frame">
                  <img
                    className="frame-child72"
                    loading="lazy"
                    alt=""
                    src="/rectangle-54@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="key-parent6">
            <img className="key-icon17" alt="" src="/key2@2x.png" />
            <div className="back6" onClick={onBackTextClick}>
              Back
            </div>
          </div>
        </section>
      </main>
      <div className="frame-parent44">
        <img className="frame-child73" alt="" src="/group-4.svg" />
        <div className="side-menu15" onClick={onSideMenuContainerClick}>
          <div className="menu-items9" />
          <div className="menu-items10" />
          <div className="menu-items11" />
        </div>
      </div>
      <div className="bottom-navigation">
        <div className="bottom-navigation-elements">
          <FrameComponent2
            bottomDivider="781"
            rectangle56="/rectangle-561@2x.png"
          />
          <FrameComponent2
            propHeight="91.3px"
            propPadding="19px 0px 0px"
            bottomDivider="806"
            propWidth="72.3px"
            rectangle56="/rectangle-55@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ColoursOfAlKhalil;
