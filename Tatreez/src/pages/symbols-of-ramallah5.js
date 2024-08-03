import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./symbols-of-ramallah5.css";

const SymbolsOfRamallah5 = () => {
  const navigate = useNavigate();

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  const onKeyImageClick = useCallback(() => {
    navigate("/symbols-of-ramallah-10");
  }, [navigate]);

  return (
    <div className="symbols-of-ramallah-11">
      <img className="image-3-icon12" alt="" src="/image-3@2x.png" />
      <div className="symbols-of-ramallah-11-inner">
        <div className="frame-parent23">
          <div className="frame-wrapper8">
            <div className="cypres-tree-parent">
              <a className="cypres-tree2">Cypres tree</a>
              <a className="a11">شجرة السرو</a>
            </div>
          </div>
          <a className="a12">600</a>
        </div>
      </div>
      <div className="wrapper7">
        <a className="a13">ديك</a>
      </div>
      <div className="wrapper8">
        <a className="a14">ريشة القمر</a>
      </div>
      <div className="frame-parent24">
        <div className="frame-parent25">
          <div className="frame-wrapper9">
            <div className="frame-parent26">
              <div className="group">
                <a className="a15">904</a>
                <div className="wrapper9">
                  <a className="a16">550</a>
                </div>
              </div>
              <div className="rooster-wrapper">
                <a className="rooster1">Rooster</a>
              </div>
            </div>
          </div>
          <div className="frame-parent27">
            <div className="frame-wrapper10">
              <div className="frame-parent28">
                <div className="frame-parent29">
                  <div className="wrapper10">
                    <a className="a17">900</a>
                  </div>
                  <div className="wrapper11">
                    <a className="a18">945</a>
                  </div>
                  <a className="a19">806</a>
                </div>
                <div className="moon-feathers-wrapper">
                  <a className="moon-feathers1">Moon feathers</a>
                </div>
              </div>
            </div>
            <a className="map3">Map</a>
          </div>
        </div>
        <div className="colours-of-ramallah-wrapper">
          <h1 className="colours-of-ramallah-container4">
            <span>
              <p className="colours-of2">Colours Of</p>
              <p className="colours-of2">Ramallah</p>
            </span>
          </h1>
        </div>
      </div>
      <footer className="frame-footer">
        <div className="tatreez-of-ramallah-wrapper">
          <h1 className="tatreez-of-ramallah-container2">
            <span className="tatreez-of-ramallah-container3">
              <p className="colours-of2">Tatreez Of</p>
              <p className="colours-of2">Ramallah</p>
            </span>
          </h1>
        </div>
        <img className="sound-icon11" loading="lazy" alt="" src="/sound.svg" />
      </footer>
      <div className="rectangle-parent6">
        <img className="frame-child34" alt="" src="/rectangle-52@2x.png" />
        <img className="frame-child35" alt="" src="/rectangle-53@2x.png" />
        <img className="frame-child36" alt="" src="/rectangle-50@2x.png" />
        <img className="frame-child37" alt="" src="/rectangle-51@2x.png" />
        <img className="frame-child38" alt="" src="/rectangle-48@2x.png" />
        <img className="frame-child39" alt="" src="/rectangle-49@2x.png" />
        <img className="frame-child40" alt="" src="/group-5.svg" />
        <img className="designs-icon3" alt="" src="/designs.svg" />
        <div className="frame-child41" />
        <div className="frame-child42" />
        <div className="frame-child43" />
        <img className="frame-child44" alt="" src="/group-6.svg" />
        <img className="frame-child45" alt="" src="/group-4.svg" />
        <img
          className="screenshot-2024-07-31-at-11091"
          alt=""
          src="/screenshot-20240731-at-110945pm@2x.png"
        />
        <img
          className="screenshot-2024-07-31-at-11092"
          alt=""
          src="/screenshot-20240731-at-110926pm@2x.png"
        />
        <img
          className="layer-1-icon6"
          loading="lazy"
          alt=""
          src="/layer-1.svg"
        />
        <img
          className="il-1588xn4583176480-o4l7-icon1"
          alt=""
          src="/il-1588xn4583176480-o4l7@2x.png"
        />
        <div className="side-menu10" onClick={onSideMenuContainerClick}>
          <div className="side-menu-child15" />
          <div className="side-menu-child16" />
          <div className="side-menu-child17" />
        </div>
        <div className="key-parent3">
          <img
            className="key-icon13"
            loading="lazy"
            alt=""
            src="/key3@2x.png"
            onClick={onKeyImageClick}
          />
          <div className="back4">Back</div>
        </div>
      </div>
    </div>
  );
};

export default SymbolsOfRamallah5;
