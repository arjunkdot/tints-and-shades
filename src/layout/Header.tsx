import React, { useState } from "react";
import Dropdown from "../components/dropdown/Dropdown";
import ColorInput from "./../components/ColorInput";

interface HeaderTypes {
  setColors: React.Dispatch<React.SetStateAction<any>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<any>>;
  setIsolateColor: React.Dispatch<React.SetStateAction<boolean>>;
  isolateColor: boolean
  currentColor: string;
}
const Header = (props: HeaderTypes) => {

  return (
    <header className="left-0 top-0 w-full bg-white sticky py-1 md:py-3 z-10 flex items-center">
      <ColorInput currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} setColors={props.setColors} />
      <Dropdown setIsolateColor={props.setIsolateColor} isolateColor={props.isolateColor} />
    </header>
  );
};

export default Header;
