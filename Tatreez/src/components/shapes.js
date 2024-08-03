import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./shapes.css";

const Shapes = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSideMenuContainerClick = useCallback(() => {
    navigate("/side-menu");
  }, [navigate]);

  return (
    <section className={`shapes ${className}`}>
      <img className="shapes-child" alt="" src="/group-4.svg" />
      <img className="shape-list-icon" alt="" src="/rectangle-52@2x.png" />
      <img className="shape-list-icon1" alt="" src="/rectangle-53@2x.png" />
      <img className="shape-list-icon2" alt="" src="/rectangle-50@2x.png" />
      <img className="shape-list-icon3" alt="" src="/rectangle-51@2x.png" />
      <img className="shape-list-icon4" alt="" src="/rectangle-48@2x.png" />
      <img className="shape-list-icon5" alt="" src="/rectangle-49@2x.png" />
      <img className="designs-icon7" loading="lazy" alt="" src="/designs.svg" />
      <div className="shape" />
      <div className="side-menu16" onClick={onSideMenuContainerClick}>
        <div className="menu-items12" />
        <div className="menu-items13" />
        <div className="menu-items14" />
      </div>
    </section>
  );
};

Shapes.propTypes = {
  className: PropTypes.string,
};

export default Shapes;
