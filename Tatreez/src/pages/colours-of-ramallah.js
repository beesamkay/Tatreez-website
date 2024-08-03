import { useCallback } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import { useNavigate } from "react-router-dom";
import "./colours-of-ramallah.css";

const ColoursOfRamallah = () => {
  const navigate = useNavigate();

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/ramallah");
  }, [navigate]);

  const onKeyImageClick = useCallback(() => {
    navigate("/symbols-of-ramallah-2");
  }, [navigate]);

  return (
    <div className="colours-of-ramallah">
      <img className="image-3-icon11" alt="" src="/image-3@2x.png" />
      <h1 className="colours-of-ramallah-container2">
        <span className="colours-of-ramallah-container3">
          <p className="colours-of1">Colours Of</p>
          <p className="colours-of1">Ramallah</p>
        </span>
      </h1>
      <div className="frame-parent20">
        <div className="frame-wrapper7">
          <div className="placeholder-parent">
            <div className="placeholder3">600</div>
            <div className="wrapper5">
              <div className="div2">904</div>
            </div>
            <div className="content-container-wrapper">
              <div className="content-container">
                <div className="div3">550</div>
                <div className="frame-parent21">
                  <div className="caption-area-wrapper">
                    <a className="caption-area">900</a>
                  </div>
                  <div className="empty-element-wrapper">
                    <div className="empty-element">806</div>
                  </div>
                  <div className="wrapper6">
                    <div className="div4">945</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent6 />
      </div>
      <img className="sound-icon10" loading="lazy" alt="" src="/sound.svg" />
      <section className="frame-parent22">
        <img className="frame-child33" alt="" src="/group-4.svg" />
        <div className="side-menu9" onClick={onSideMenuContainerClick}>
          <div className="side-menu-child12" />
          <div className="side-menu-child13" />
          <div className="side-menu-child14" />
        </div>
      </section>
      <div className="colours-of-ramallah-inner">
        <div className="key-holder-parent">
          <div className="key-holder">
            <img className="key-icon11" alt="" src="/key3@2x.png" />
            <div className="back3" onClick={onBackTextClick}>
              Back
            </div>
          </div>
          <div className="key-holder1">
            <img
              className="key-icon12"
              loading="lazy"
              alt=""
              src="/key-14@2x.png"
              onClick={onKeyImageClick}
            />
            <div className="next4">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColoursOfRamallah;
