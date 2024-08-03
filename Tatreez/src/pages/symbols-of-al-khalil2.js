import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent13 from "../components/FrameComponent13";
import "./symbols-of-al-khalil2.css";

const SymbolsOfAlKhalil2 = () => {
  const navigate = useNavigate();

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <div className="symbols-of-al-khalil-3">
      <img className="image-3-icon16" alt="" src="/image-3@2x.png" />
      <h1 className="symbols-of-al-container2">
        <span className="symbols-of-al-container3">
          <p className="symbols-of1">Symbols Of</p>
          <p className="symbols-of1">Al Khalil</p>
        </span>
      </h1>
      <section className="content1">
        <img className="content-child" alt="" src="/group-4.svg" />
        <img className="designs-icon5" alt="" src="/designs1.svg" />
        <div className="side-menu13" onClick={onSideMenuContainerClick}>
          <div className="side-menu-child21" />
          <div className="side-menu-child22" />
          <div className="side-menu-child23" />
        </div>
      </section>
      <FrameComponent13 />
    </div>
  );
};

export default SymbolsOfAlKhalil2;
