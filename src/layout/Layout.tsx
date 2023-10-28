import React, { ReactElement } from "react";
import Header from "./Header";

interface LayoutTypes{
  setColors: React.Dispatch<React.SetStateAction<any>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<any>>;
  setIsolateColor: React.Dispatch<React.SetStateAction<boolean>>;
  isolateColor: boolean
  currentColor: string;
  children: ReactElement;
}

const Layout = (props: LayoutTypes) => {
  return (
    <div className="px-1 md:px-3 font-fira antialiased">
      <Header currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} setColors={props.setColors} setIsolateColor={props.setIsolateColor} isolateColor={props.isolateColor} />
      {props.children}
    </div>
  );
};

export default Layout;
