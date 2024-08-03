import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent1 from "../components/FrameComponent1";
import "./symbols-of-ramallah3.css";

const SymbolsOfRamallah3 = () => {
  const navigate = useNavigate();

  const onKeyImageClick = useCallback(() => {
    navigate("/symbols-of-ramallah-4");
  }, [navigate]);

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  const onKeyImageClick1 = useCallback(() => {
    navigate("/symbols-of-ramallah-10");
  }, [navigate]);

  return (
    <div className="symbols-of-ramallah-9">
      <img className="image-3-icon9" alt="" src="/image-3@2x.png" />
      <div className="wrapper1">
        <a className="a7">شجرة السرو</a>
      </div>
      <div className="wrapper2">
        <a className="a8">ديك</a>
      </div>
      <div className="wrapper3">
        <a className="a9">ريشة القمر</a>
      </div>
      <div className="cypress-tree-parent">
        <div className="cypress-tree-english">
          <a className="cypres-tree1">Cypres tree</a>
        </div>
        <div className="rooster-parent">
          <div className="wrapper4">
            <a className="a10">600</a>
          </div>
          <FrameComponent8 />
        </div>
        <FrameComponent1
          tatreezOf="Tatreez Of"
          ramallah="Ramallah"
          key="/key2@2x.png"
          onKeyImageClick={onKeyImageClick}
          back="Back"
        />
      </div>
      <img
        className="embroidered-palestinian-fellah-icon1"
        alt=""
        src="/embroideredpalestinianfellahathobeth8011@2x.png"
      />
      <div className="menu">
        <img className="menu-child" alt="" src="/rectangle-52@2x.png" />
        <img className="menu-item" alt="" src="/rectangle-53@2x.png" />
        <img className="menu-inner" alt="" src="/rectangle-50@2x.png" />
        <img className="menu-child1" alt="" src="/rectangle-51@2x.png" />
        <img className="menu-child2" alt="" src="/rectangle-48@2x.png" />
        <img className="menu-child3" alt="" src="/rectangle-49@2x.png" />
        <img className="menu-child4" alt="" src="/group-5.svg" />
        <img className="designs-icon2" alt="" src="/designs.svg" />
        <div className="menu-child5" />
        <div className="menu-child6" />
        <div className="menu-child7" />
        <img className="menu-child8" alt="" src="/group-6.svg" />
        <img className="menu-child9" alt="" src="/group-4.svg" />
        <div className="menu-child10" />
        <img className="sound-icon8" loading="lazy" alt="" src="/sound.svg" />
        <img
          className="img-20211225-112822-480x4802x-icon"
          alt=""
          src="/img-20211225-112822-480x4802x@2x.png"
        />
        <div className="side-menu8" onClick={onSideMenuContainerClick}>
          <div className="side-menu-child9" />
          <div className="side-menu-child10" />
          <div className="side-menu-child11" />
        </div>
        <div className="key-parent1">
          <img
            className="key-icon9"
            loading="lazy"
            alt=""
            src="/key-13@2x.png"
            onClick={onKeyImageClick1}
          />
          <div className="next3">Next</div>
        </div>
      </div>
    </div>
  );
};

export default SymbolsOfRamallah3;
