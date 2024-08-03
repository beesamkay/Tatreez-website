import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./symbols-of-ramallah4.css";

const SymbolsOfRamallah4 = () => {
  const navigate = useNavigate();

  const onKeyImageClick = useCallback(() => {
    navigate("/symbols-of-ramallah-9");
  }, [navigate]);

  const onKeyImageClick1 = useCallback(() => {
    navigate("/symbols-of-ramallah-11");
  }, [navigate]);

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <div className="symbols-of-ramallah-10">
      <img className="image-3-icon5" alt="" src="/image-3@2x.png" />
      <a className="a2">900</a>
      <div className="symbols-of-ramallah-10-inner">
        <div className="frame-parent15">
          <div className="cypres-tree-wrapper">
            <a className="cypres-tree">Cypres tree</a>
          </div>
          <div className="frame-parent16">
            <div className="rooster-description-wrapper">
              <a className="rooster-description">600</a>
            </div>
            <div className="frame-parent17">
              <div className="moon-feathers-title-wrapper">
                <div className="moon-feathers-title">
                  <div className="moon-feathers-content">
                    <div className="parent">
                      <a className="a3">904</a>
                      <div className="colors-title">
                        <a className="colors-description">550</a>
                        <div className="colors-details">
                          <a className="colors-subdetails">806</a>
                        </div>
                      </div>
                    </div>
                    <div className="rooster-image">
                      <a className="rooster">Rooster</a>
                    </div>
                  </div>
                  <div className="moon-feathers-image">
                    <div className="moon-feathers-label">
                      <a className="moon-feathers-caption">945</a>
                      <div className="moon-feathers-details">
                        <div className="moon-feathers-element">
                          <a className="moon-feathers">Moon feathers</a>
                          <a className="a4">ريشة القمر</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="colours-of-ramallah-container">
                <span className="colours-of-ramallah-container1">
                  <p className="colours-of">Colours Of</p>
                  <p className="colours-of">Ramallah</p>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="cypress-rooster">
        <a className="a5">ديك</a>
        <a className="a6">شجرة السرو</a>
        <img
          className="screenshot-2024-07-31-at-1109"
          alt=""
          src="/screenshot-20240731-at-110945pm@2x.png"
        />
      </div>
      <div className="key-data-parent">
        <div className="key-data">
          <img
            className="key-icon4"
            alt=""
            src="/key1@2x.png"
            onClick={onKeyImageClick}
          />
          <div className="back">Back</div>
        </div>
        <div className="key-data1">
          <img
            className="key-icon5"
            loading="lazy"
            alt=""
            src="/key-11@2x.png"
            onClick={onKeyImageClick1}
          />
          <div className="next">Next</div>
        </div>
      </div>
      <div className="background-parent">
        <div className="background" />
        <div className="rectangle-parent4">
          <img className="frame-child13" alt="" src="/rectangle-52@2x.png" />
          <img className="frame-child14" alt="" src="/rectangle-53@2x.png" />
          <img className="frame-child15" alt="" src="/rectangle-50@2x.png" />
          <img className="frame-child16" alt="" src="/rectangle-51@2x.png" />
          <img className="frame-child17" alt="" src="/rectangle-48@2x.png" />
          <img className="frame-child18" alt="" src="/rectangle-49@2x.png" />
          <img className="frame-child19" alt="" src="/group-5.svg" />
          <img className="designs-icon" alt="" src="/designs.svg" />
          <div className="frame-child20" />
          <div className="frame-child21" />
          <div className="frame-child22" />
          <img className="frame-child23" alt="" src="/group-6.svg" />
          <img className="frame-child24" alt="" src="/group-4.svg" />
          <img className="sound-icon5" loading="lazy" alt="" src="/sound.svg" />
          <div className="tatreez">
            <h1 className="tatreez-of-ramallah-container">
              <span className="colours-of-ramallah-container1">
                <p className="colours-of">Tatreez Of</p>
                <p className="colours-of">Ramallah</p>
              </span>
            </h1>
            <img
              className="embroidered-palestinian-fellah-icon"
              alt=""
              src="/embroideredpalestinianfellahathobeth8011@2x.png"
            />
          </div>
          <div className="side-menu5" onClick={onSideMenuContainerClick}>
            <div className="menu-items" />
            <div className="menu-items1" />
            <div className="menu-items2" />
          </div>
        </div>
      </div>
      <div className="il-1588xn4583176480-o4l7-wrapper">
        <img
          className="il-1588xn4583176480-o4l7-icon"
          alt=""
          src="/il-1588xn4583176480-o4l7@2x.png"
        />
      </div>
    </div>
  );
};

export default SymbolsOfRamallah4;
