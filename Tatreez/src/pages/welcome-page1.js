import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./welcome-page1.css";

const WelcomePage1 = () => {
  const navigate = useNavigate();

  const onClickHereTextClick = useCallback(() => {
    navigate("/map-hover");
  }, [navigate]);

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <div className="welcome-page1">
      <img className="image-3-icon1" alt="" src="/image-3@2x.png" />
      <a className="a">مرحبا</a>
      <div className="welcome-group">
        <h1 className="welcome1">WELCOME</h1>
        <div className="hebron-wrapper">
          <div className="hebron" />
        </div>
      </div>
      <div className="welcome-page-child" />
      <div className="frame-parent">
        <div className="frame-group">
          <div className="jaffa-parent-parent">
            <div className="jaffa-parent">
              <div className="jaffa">Jaffa</div>
              <div className="ramallah-parent-wrapper">
                <div className="ramallah-parent">
                  <div className="ramallah-parent-child" />
                  <div className="ramallah-parent-inner">
                    <div className="ramallah-group">
                      <div className="ramallah">Ramallah</div>
                      <div className="line-wrapper">
                        <div className="frame-child" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame-container">
                <div className="gaza-wrapper">
                  <div className="gaza">Gaza</div>
                </div>
                <div className="frame-div">
                  <div className="frame-parent1">
                    <div className="frame-wrapper1">
                      <div className="hebron-parent">
                        <div className="hebron1">Hebron</div>
                        <div className="line-wrapper">
                          <div className="frame-child" />
                        </div>
                      </div>
                    </div>
                    <div className="ramallah-parent-child" />
                  </div>
                  <div className="frame-wrapper2">
                    <div className="al-khalil-parent">
                      <div className="al-khalil">Al Khalil</div>
                      <div className="line-wrapper">
                        <div className="frame-child" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="south-locations">
            <div className="beersheba-sinai-container">
              <span>
                <p className="beersheba">Beersheba</p>
                <p className="beersheba">{`& Sinai`}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="layer-1-parent">
          <div className="layer-1">
            <div className="frame-parent2">
              <div className="vector-parent">
                <img className="vector-icon" alt="" src="/vector.svg" />
                <div className="jaffa1" />
                <div className="gaza1" />
                <div className="hebron2" />
                <div className="ramallah1" />
              </div>
              <div className="click-here" onClick={onClickHereTextClick}>
                Click here
              </div>
            </div>
            <div className="sinai-wrapper">
              <div className="hebron" />
            </div>
          </div>
          <div className="frame-parent3">
            <img className="group-icon" alt="" src="/group-4.svg" />
            <img className="layer-1-icon2" alt="" src="/layer-1.svg" />
            <img
              className="sound-icon1"
              loading="lazy"
              alt=""
              src="/sound.svg"
            />
            <div className="side-menu" onClick={onSideMenuContainerClick}>
              <div className="side-menu-child" />
              <div className="side-menu-item" />
              <div className="side-menu-inner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage1;
