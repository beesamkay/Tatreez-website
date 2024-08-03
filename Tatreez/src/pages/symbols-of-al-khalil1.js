import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent12 from "../components/FrameComponent12";
import "./symbols-of-al-khalil1.css";

const SymbolsOfAlKhalil1 = () => {
  const navigate = useNavigate();

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  const onKeyImageClick = useCallback(() => {
    navigate("/symbols-of-al-khalil-3");
  }, [navigate]);

  return (
    <div className="symbols-of-al-khalil-2">
      <img className="image-3-icon8" alt="" src="/image-3@2x.png" />
      <section className="frame-parent18">
        <img className="frame-child28" alt="" src="/group-4.svg" />
        <img
          className="designs-icon1"
          loading="lazy"
          alt=""
          src="/designs.svg"
        />
        <div className="side-menu7" onClick={onSideMenuContainerClick}>
          <div className="side-menu-child6" />
          <div className="side-menu-child7" />
          <div className="side-menu-child8" />
        </div>
      </section>
      <div className="navigation">
        <img
          className="key-icon8"
          loading="lazy"
          alt=""
          src="/key1@2x.png"
          onClick={onKeyImageClick}
        />
        <div className="next2">Next</div>
      </div>
      <FrameComponent12 />
    </div>
  );
};

export default SymbolsOfAlKhalil1;
