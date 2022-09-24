import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}
