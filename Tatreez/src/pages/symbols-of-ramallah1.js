import { useCallback } from "react";
import RoosterContainer from "../components/RoosterContainer";
import { useNavigate } from "react-router-dom";
import TreeContainer from "../components/TreeContainer";
import "./symbols-of-ramallah1.css";

const SymbolsOfRamallah1 = () => {
  const navigate = useNavigate();

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <div className="symbols-of-ramallah-8">
      <img className="image-3-icon13" alt="" src="/image-3@2x.png" />
      <a className="rooster2">Rooster</a>
      <section className="rooster-container-wrapper">
        <RoosterContainer />
      </section>
      <section className="rectangle-parent7">
        <img className="frame-child46" alt="" src="/rectangle-52@2x.png" />
        <img className="frame-child47" alt="" src="/rectangle-53@2x.png" />
        <img className="frame-child48" alt="" src="/rectangle-50@2x.png" />
        <img className="frame-child49" alt="" src="/rectangle-49@2x.png" />
        <img
          className="frame-child50"
          loading="lazy"
          alt=""
          src="/group-5.svg"
        />
        <div className="frame-child51" />
        <img className="frame-child52" alt="" src="/group-4.svg" />
        <div className="rectangle-parent8">
          <img className="frame-child53" alt="" src="/rectangle-51@2x.png" />
          <img className="frame-child54" alt="" src="/rectangle-48@2x.png" />
          <img className="designs-icon4" alt="" src="/designs.svg" />
        </div>
        <div className="frame-child55" />
        <div className="side-menu11" onClick={onSideMenuContainerClick}>
          <div className="side-menu-child18" />
          <div className="side-menu-child19" />
          <div className="side-menu-child20" />
        </div>
      </section>
      <TreeContainer />
    </div>
  );
};

export default SymbolsOfRamallah1;
