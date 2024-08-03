import { useCallback } from "react";
import RoosterContent from "../components/RoosterContent";
import { useNavigate } from "react-router-dom";
import Navigation2 from "../components/Navigation2";
import "./symbols-of-ramallah2.css";

const SymbolsOfRamallah2 = () => {
  const navigate = useNavigate();

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <div className="symbols-of-ramallah-4">
      <img className="image-3-icon17" alt="" src="/image-3@2x.png" />
      <div className="background1" />
      <div className="wrapper17">
        <a className="a24">900</a>
      </div>
      <div className="cypress-tree">
        <div className="cypress-tree-content">
          <div className="cypress-tree-image" />
          <a className="a25">شجرة السرو</a>
        </div>
      </div>
      <section className="rooster3">
        <RoosterContent />
        <div className="designs">
          <div className="designs-background" />
          <div className="design-elements">
            <img
              className="design-shapes-icon"
              alt=""
              src="/rectangle-52@2x.png"
            />
            <img
              className="design-shapes-icon1"
              alt=""
              src="/rectangle-53@2x.png"
            />
            <img
              className="design-shapes-icon2"
              alt=""
              src="/rectangle-50@2x.png"
            />
            <img
              className="design-shapes-icon3"
              alt=""
              src="/rectangle-51@2x.png"
            />
            <img
              className="design-shapes-icon4"
              alt=""
              src="/rectangle-48@2x.png"
            />
            <img
              className="design-shapes-icon5"
              alt=""
              src="/rectangle-49@2x.png"
            />
            <img className="designs-icon6" alt="" src="/designs.svg" />
            <img
              className="design-elements-child"
              loading="lazy"
              alt=""
              src="/group-6.svg"
            />
            <img className="design-elements-item" alt="" src="/group-4.svg" />
            <div className="side-menu14" onClick={onSideMenuContainerClick}>
              <div className="side-menu-icons" />
              <div className="side-menu-icons1" />
              <div className="side-menu-icons2" />
            </div>
          </div>
        </div>
      </section>
      <Navigation2 />
    </div>
  );
};

export default SymbolsOfRamallah2;
