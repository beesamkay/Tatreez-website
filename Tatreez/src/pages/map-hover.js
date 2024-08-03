import { useCallback } from "react";
import LocationGazaBottom from "../components/LocationGazaBottom";
import { useNavigate } from "react-router-dom";
import "./map-hover.css";

const MapHover = () => {
  const navigate = useNavigate();

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <div className="map-hover">
      <img className="image-3-icon3" alt="" src="/image-3@2x.png" />
      <a className="a1">مرحبا</a>
      <h1 className="welcome2">WELCOME</h1>
      <div className="greeting-separator" />
      <div className="location-gaza-bottom-parent">
        <LocationGazaBottom />
        <div className="frame-parent6">
          <div className="cities-container-parent">
            <div className="cities-container">
              <img className="vector-icon1" alt="" src="/vector.svg" />
              <div className="jaffa2" />
              <div className="gaza2" />
              <div className="sinai2" />
              <div className="hebron3" />
              <div className="ramallah2" />
            </div>
            <div className="jaffa-group">
              <div className="jaffa3">Jaffa</div>
              <div className="ramallah-wrapper">
                <div className="ramallah3">Ramallah</div>
              </div>
            </div>
            <div className="frame-wrapper3">
              <div className="frame-parent7">
                <div className="gaza-container">
                  <div className="gaza3">Gaza</div>
                </div>
                <div className="hebron-group">
                  <div className="hebron4">Hebron</div>
                  <div className="frame-wrapper4">
                    <div className="frame-parent8">
                      <div className="frame-wrapper5">
                        <div className="al-khalil-group">
                          <div className="al-khalil1">Al Khalil</div>
                          <div className="hebron5" />
                        </div>
                      </div>
                      <div className="beersheba-sinai-container1">
                        <span>
                          <p className="beersheba1">Beersheba</p>
                          <p className="beersheba1">{`& Sinai`}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent9">
            <img className="frame-child2" alt="" src="/group-4.svg" />
            <img className="layer-1-icon3" alt="" src="/layer-1.svg" />
            <img
              className="sound-icon3"
              loading="lazy"
              alt=""
              src="/sound.svg"
            />
            <div className="side-menu1" onClick={onSideMenuContainerClick}>
              <div className="rectangle-div" />
              <div className="side-menu-child1" />
              <div className="side-menu-child2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapHover;
