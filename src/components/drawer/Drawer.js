import React from "react";
import { useDispatch } from "react-redux";
import { drawerToggle } from "../../redux/slices/appStates.slice";
import "./Drawer.css";

const Drawer = ({ isOpen }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={isOpen ? "overlay_open" : "overlay_close"}
      onClick={() => {
        dispatch(drawerToggle());
        document.body.style.overflow = "auto";
      }}
    >
      <div
        className={isOpen ? "drawer_container_open" : "drawer_container_close"}
      ></div>
    </div>
  );
};

export default Drawer;
