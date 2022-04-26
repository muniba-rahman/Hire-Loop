import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { drawerToggle, closeDrawer } from "../../redux/slices/appStates.slice";
import { Link } from "react-router-dom";
import "./Drawer.css";
import { navRoutes } from "../../constants/route_constants";
import { useSwipeable } from "react-swipeable";

const Drawer = ({ isOpen }) => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState([false, false, false]);
  const swipeHandler = useSwipeable({
    onSwipedLeft: (e) => {
      dispatch(drawerToggle());
      document.body.style.overflow = "auto";
    },
  });
  const handleDrawerClicked = (e) => {
    e.stopPropagation();
  };

  const RenderRouteList = ({ routeList }) => {
    return routeList.map((route, index) => {
      return (
        <div key={index} className={"routeItem-container"}>
          <div
            className={"routeItem"}
            onClick={() => {
              if (route.dropdownRoutes) {
                let newArray = [...dropdownOpen];
                newArray[route.dropdownIndex] = !newArray[route.dropdownIndex];
                setDropdownOpen(newArray);
              }
            }}
          >
            <Link
              onClick={() => {
                dispatch(closeDrawer());
                document.body.style.overflow = "auto";
                setDropdownOpen([false, false, false]);
              }}
              to={route.path}
              style={{
                width: "80%",
                padding: "8px",
                textAlign: "left",
                whiteSpace: "nowrap",
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
          {route.dropdownRoutes ? (
            <div
              className={`dropdownRoutes ${
                dropdownOpen[route.dropdownIndex]
                  ? "dropdownOpen"
                  : "dropdownClose"
              }`}
            >
              {route.dropdownRoutes.map((dropdownRoute, index) => {
                return (
                  <Link
                    onClick={() => {
                      setDropdownOpen([false, false, false]);
                      dispatch(closeDrawer());
                    }}
                    key={index}
                    to={dropdownRoute.path}
                    style={{
                      padding: "5px",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                      borderBottom: "0.5px solid rgb(182, 182, 182)",
                    }}
                  >
                    {dropdownRoute.name}
                  </Link>
                );
              })}
            </div>
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
        {...swipeHandler}
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
