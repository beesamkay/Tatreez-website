import "./welcome-page.css";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      <div className="main">
        <img className="main-child" alt="" src="/group-4.svg" />
        <div className="welcome-parent">
          <div className="welcome">WELCOME</div>
          <div className="wrapper">
            <div className="div">مرحبا</div>
          </div>
        </div>
      </div>
      <footer className="sound-player-wrapper">
        <div className="sound-player">
          <img className="sound-icon" loading="lazy" alt="" src="/sound.svg" />
          <div className="sound-controls">
            <div className="sound-layers">
              <img className="layer-1-icon" alt="" src="/layer-1.svg" />
              <img className="layer-1-icon1" alt="" src="/layer-1-1.svg" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
