import React from "react";
import { useDispatch } from "react-redux";
import { drawerToggle } from "../../redux/slices/appStates.slice";
import { Link } from "react-router-dom";
import "./Drawer.css";
import { navRoutes } from "../../constants/route_constants";

const Drawer = ({ isOpen }) => {
  const dispatch = useDispatch();

  const handleDrawerClicked = (e) => {
    e.stopPropagation();
  };

  const RenderRouteList = ({ routeList }) => {
    console.log(routeList);
    return routeList.map((route, index) => {
      return (
        <div key={index} className={"routeItem"}>
          <Link
            to={route.path}
            style={{
              width: "80%",
              padding: "8px",
              textAlign: "left",
            }}
          >
            {route.name}
          </Link>
          {route.dropdownRoutes ? (
            <i
              className="bi bi-chevron-down"
              style={{
                width: "20%",
                alignSelf: "stretch",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          ) : null}
        </div>
      );
    });
  };

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
        onClick={handleDrawerClicked}
      >
        <div className={"drawer-routeList"}>
          <div style={{ height: "4vh" }} />
          <RenderRouteList routeList={navRoutes.default} />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
