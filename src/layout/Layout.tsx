import React, { ReactElement, useEffect } from "react";
import Header from "./Header";
import Cookies from "js-cookie";

interface LayoutTypes {
  setColors: React.Dispatch<React.SetStateAction<any>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<any>>;
  setIsolateColor: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isolateColor: boolean;
  darkMode: boolean;
  currentColor: string;
  children: ReactElement;
}

const Layout = (props: LayoutTypes) => {
  useEffect(() => {
    if (Cookies.get("ts_darkmode")) {
      props.setDarkMode(true);
    } else {
      props.setDarkMode(false);
    }
  }, [props.darkMode]);

  return (
    <div
      className={`px-1 md:px-3 font-plex antialiased ${
        props.darkMode ? "dark" : ""
      }`}>
      <Header
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
        setColors={props.setColors}
        setIsolateColor={props.setIsolateColor}
        isolateColor={props.isolateColor}
        darkMode={props.darkMode}
        setDarkMode={props.setDarkMode}
      />
      {props.children}
    </div>
  );
};

export default Layout;
