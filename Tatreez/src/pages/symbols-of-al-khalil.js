import { useCallback } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import { useNavigate } from "react-router-dom";
import FrameComponent11 from "../components/FrameComponent11";
import "./symbols-of-al-khalil.css";

const SymbolsOfAlKhalil = () => {
  const navigate = useNavigate();

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <div className="symbols-of-al-khalil-1">
      <img className="image-3-icon4" alt="" src="/image-3@2x.png" />
      <h1 className="symbols-of-al-container">
        <span className="symbols-of-al-container1">
          <p className="symbols-of">Symbols Of</p>
          <p className="symbols-of">Al Khalil</p>
        </span>
      </h1>
      <FrameComponent5 rectangle38="/rectangle-38@2x.png" separator="900" />
      <div className="symbols-of-al-khalil-1-inner">
        <div className="frame-parent12">
          <div className="rectangle-group">
            <img className="rectangle-icon" alt="" src="/rectangle-37@2x.png" />
            <div className="placeholder-wrapper">
              <a className="placeholder">601</a>
            </div>
          </div>
          <div className="rectangle-container">
            <img className="frame-child7" alt="" src="/rectangle-57@2x.png" />
            <div className="placeholder-container">
              <a className="placeholder1">550</a>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent5
        propMarginTop="unset"
        rectangle38="/rectangle-54@2x.png"
        propHeight="88.3px"
        propPadding="16px 0px 0px"
        separator="640"
        propWidth="72.3px"
      />
      <div className="symbols-of-al-khalil-1-child">
        <div className="frame-parent13">
          <div className="rectangle-group">
            <img className="frame-child8" alt="" src="/rectangle-56@2x.png" />
            <div className="placeholder-frame">
              <a className="placeholder2">781</a>
            </div>
          </div>
          <div className="frame-parent14">
            <div className="rectangle-parent2">
              <img className="frame-child9" alt="" src="/rectangle-41@2x.png" />
              <img
                className="frame-child10"
                alt=""
                src="/rectangle-55@2x.png"
              />
            </div>
            <div className="frame-wrapper6">
              <div className="separator-parent">
                <a className="separator">904</a>
                <a className="separator1">806</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent5
        propMarginTop="unset"
        rectangle38="/rectangle-40@2x.png"
        propHeight="88.5px"
        propPadding="16.1px 0px 0px"
        separator="355"
        propWidth="72.4px"
      />
      <FrameComponent5
        propMarginTop="unset"
        rectangle38="/rectangle-39@2x.png"
        propHeight="94.4px"
        propPadding="14.5px 0px 0px"
        separator="815"
        propWidth="79.9px"
      />
      <section className="frame-section">
        <img className="frame-child11" alt="" src="/group-4.svg" />
        <img className="leech-icon" alt="" src="/leech.svg" />
        <div className="side-menu4" onClick={onSideMenuContainerClick}>
          <div className="side-menu-child3" />
          <div className="side-menu-child4" />
          <div className="side-menu-child5" />
        </div>
      </section>
      <div className="symbols-of-al-khalil-1-inner1">
        <div className="rectangle-parent3">
          <div className="frame-child12" />
          <div className="leech">Leech</div>
          <div className="frame">
            <div className="div1">علقة</div>
          </div>
        </div>
      </div>
      <FrameComponent11 />
    </div>
  );
};

export default SymbolsOfAlKhalil;
