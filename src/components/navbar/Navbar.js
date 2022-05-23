import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FONT_COLOR_BLUE } from "../../constants/color_constants";
import logo_aic from "../../images/AIC-logo.png";
import "./Navbar.css";
import { navRoutes } from "../../constants/route_constants";
import { useDispatch, useSelector } from "react-redux";
import { drawerToggle } from "../../redux/slices/appStates.slice";

const Navbar = () => {
  const [navBgColor, setNavBgColor] = useState("#ffffff30");
  const [navFontColor, setFontColor] = useState("white");
  const [dropdownColor, setDropdownColor] = useState("#0000009d");
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const handleScrollEvent = (e) => {
    if (e.target.documentElement.scrollTop > 50 && navBgColor !== "white") {
      setNavBgColor("white");
      setFontColor(FONT_COLOR_BLUE);
      setDropdownColor("white");
    } else if (
      e.target.documentElement.scrollTop <= 50 &&
      navBgColor !== "#ffffff30"
    ) {
      setNavBgColor("#ffffff30");
      setFontColor("white");
      setDropdownColor("#0000009d");
    }
  };

  useEffect(
    (e) => {
      window.addEventListener("scroll", handleScrollEvent);
      return () => {
        window.removeEventListener("scroll", handleScrollEvent);
      };
    },
    [navBgColor]
  );

  const RenderNavRoutes = ({ routeList }) => {
    return routeList.map((route, index) => {
      return (
        <li key={index}>
          <Link style={{ color: navFontColor }} to={route.path}>
            {route.name}
            {route.dropdownRoutes ? (
              <i
                className="bi bi-caret-down-fill"
                style={{ marginLeft: "2px", marginTop: "2px" }}
              />
            ) : null}
          </Link>
          {route.dropdownRoutes ? (
            <RenderDropdown dropdownRoutes={route.dropdownRoutes} />
          ) : null}
        </li>
      );
    });
  };

  const RenderDropdown = ({ dropdownRoutes }) => {
    return (
      <div
        className={"dropdown_container"}
        style={{ backgroundColor: dropdownColor }}
      >
        {dropdownRoutes.map((route, index) => (
          <li key={index}>
            <Link
              to={route.path}
              style={{ color: navFontColor }}
              onClick={
                route.func
                  ? () => {
                      route.func(dispatch);
                    }
                  : () => {}
              }
            >
              {route.name}
            </Link>
          </li>
        ))}
      </div>
    );
  };

  return (
    <nav style={{ backgroundColor: navBgColor }}>
      <div className={"logo_container"}>
        <img alt="logo_aic" src={logo_aic} />
        <h2 style={{ color: navFontColor }}>AI CLUB</h2>
      </div>
      <div className={"list_container"}>
        <RenderNavRoutes
          routeList={user._id ? navRoutes.signedIn : navRoutes.default}
        />
      </div>
      {/* <form className={"search_form"}>
        <input placeholder={"Search"}></input>
        <button style={{ color: navFontColor }}>
          <i className="bi bi-search" />
        </button>
      </form> */}
      <button
        className={"drawerBtn"}
        style={{ backgroundColor: navFontColor }}
        onClick={() => {
          dispatch(drawerToggle());
          document.body.style.overflow = "hidden";
        }}
      >
        <i
          className={"bi bi-list"}
          style={{ color: navBgColor != "white" ? "black" : "white" }}
        />
      </button>
    </nav>
  );
};

export default Navbar;
