import { useCallback } from "react";
import FrameComponent10 from "../components/FrameComponent10";
import { useNavigate } from "react-router-dom";
import "./colours-of-al-khalil1.css";

const ColoursOfAlKhalil1 = () => {
  const navigate = useNavigate();

  const onKeyImageClick = useCallback(() => {
    navigate("/colours-of-al-khalil");
  }, [navigate]);

  const onNextTextClick = useCallback(() => {
    navigate("/symbols-of-al-khalil-1");
  }, [navigate]);

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <div className="colours-of-al-khalil">
      <img className="image-3-icon14" alt="" src="/image-3@2x.png" />
      <h1 className="colours-of-al-container">
        <span className="colours-of-al-container1">
          <p className="colours-of3">Colours Of</p>
          <p className="colours-of3">Al Khalil</p>
        </span>
      </h1>
      <div className="colours-of-al-khalil-inner">
        <div className="frame-parent30">
          <div className="wrapper12">
            <a className="a20">904</a>
          </div>
          <img className="frame-child56" alt="" src="/rectangle-41@2x.png" />
        </div>
      </div>
      <div className="colours-of-al-khalil-child">
        <div className="frame-parent31">
          <div className="wrapper13">
            <a className="a21">355</a>
          </div>
          <img className="frame-child57" alt="" src="/rectangle-40@2x.png" />
        </div>
      </div>
      <div className="colours-of-al-khalil-inner1">
        <div className="frame-parent32">
          <div className="wrapper14">
            <a className="a22">815</a>
          </div>
          <img className="frame-child57" alt="" src="/rectangle-39@2x.png" />
        </div>
      </div>
      <div className="colours-of-al-khalil-inner2">
        <div className="frame-parent33">
          <div className="wrapper15">
            <a className="a21">900</a>
          </div>
          <img className="frame-child59" alt="" src="/rectangle-38@2x.png" />
        </div>
      </div>
      <div className="colours-of-al-khalil-inner3">
        <div className="frame-parent34">
          <div className="frame-wrapper11">
            <div className="parent1">
              <div className="div5">601</div>
              <div className="parent2">
                <div className="div6">550</div>
                <div className="frame-parent35">
                  <div className="wrapper16">
                    <div className="div7">640</div>
                  </div>
                  <div className="div8">781</div>
                  <div className="div9">806</div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent10 />
        </div>
      </div>
      <main className="leech-parent">
        <img className="leech-icon1" alt="" src="/leech.svg" />
        <div className="frame-parent36">
          <div className="sound-wrapper">
            <img
              className="sound-icon12"
              loading="lazy"
              alt=""
              src="/sound.svg"
            />
          </div>
          <div className="rectangle-parent9">
            <div className="frame-child60" />
            <div className="div10">ديك</div>
          </div>
        </div>
        <footer className="key-navigation">
          <div className="key-parent4">
            <img
              className="key-icon14"
              alt=""
              src="/key4@2x.png"
              onClick={onKeyImageClick}
            />
            <div className="back5">Back</div>
          </div>
          <div className="key-parent5">
            <img
              className="key-icon15"
              loading="lazy"
              alt=""
              src="/key-13@2x.png"
            />
            <div className="next5" onClick={onNextTextClick}>
              Next
            </div>
          </div>
        </footer>
      </main>
      <div className="frame-parent37">
        <img className="frame-child61" alt="" src="/group-4.svg" />
        <div className="side-menu12" onClick={onSideMenuContainerClick}>
          <div className="menu-items6" />
          <div className="menu-items7" />
          <div className="menu-items8" />
        </div>
      </div>
      <div className="leech-wrapper">
        <div className="leech1">Leech</div>
      </div>
    </div>
  );
};

export default ColoursOfAlKhalil1;
