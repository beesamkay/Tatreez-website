import { useCallback } from "react";
import FrameComponent7 from "../components/FrameComponent7";
import Shapes from "../components/Shapes";
import { useNavigate } from "react-router-dom";
import Content from "../components/Content";
import "./symbols-of-ramallah.css";

const SymbolsOfRamallah = () => {
  const navigate = useNavigate();

  const onKeyImageClick = useCallback(() => {
    navigate("/symbols-of-ramallah-8");
  }, [navigate]);

  return (
    <div className="symbols-of-ramallah-2">
      <img className="image-3-icon18" alt="" src="/image-3@2x.png" />
      <section className="symbols-of-ramallah-2-inner">
        <div className="frame-parent40">
          <div className="wrapper18">
            <a className="a26">600</a>
          </div>
          <a className="a27">904</a>
          <FrameComponent7 />
        </div>
      </section>
      <Shapes />
      <div className="navigation1">
        <img
          className="key-icon16"
          loading="lazy"
          alt=""
          src="/key-11@2x.png"
          onClick={onKeyImageClick}
        />
        <div className="next6">Next</div>
      </div>
      <Content />
    </div>
  );
};

export default SymbolsOfRamallah;
