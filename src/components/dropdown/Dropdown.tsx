import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCheck } from "react-icons/md";
import useClickOutside from "../../hooks/useClickOutside";
import DropdownItem from "./DropdownItem";
import Cookies from "js-cookie";
interface DropdownTypes {
  setIsolateColor: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isolateColor: boolean;
  darkMode: boolean;
}
const Dropdown = (props: DropdownTypes) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isClickedOutside = useClickOutside(dropdownRef);

  useEffect(() => {
    if (isClickedOutside) {
      setIsDropdownShown(false);
    }
  }, [isClickedOutside]);

  const handleDropdownToggle = () => {
    setIsDropdownShown(!isDropdownShown);
  };

  const toggleIsolation = () => {
    if (!Cookies.get("ts_isolate")) {
      Cookies.set("ts_isolate", "true");
      props.setIsolateColor(true);
    } else {
      Cookies.remove("ts_isolate");
      props.setIsolateColor(false);
    }
    setIsDropdownShown(false);
  };

  const toggleDarkMode = () => {
    if (!Cookies.get("ts_darkmode")) {
      Cookies.set("ts_darkmode", "true");
      props.setDarkMode(true);
    } else {
      Cookies.remove("ts_darkmode");
      props.setDarkMode(false);
    }
    setIsDropdownShown(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={handleDropdownToggle}
        className="w-12 h-12 bg-slate-100 dark:bg-slate-700  dark:border-slate-700 dark:text-slate-50 hover:bg-slate-200 dark:hover:bg-slate-600 ease-linear duration-150 border border-slate-200 border-l-0 flex items-center justify-center">
        <BsThreeDotsVertical />
      </button>
      {isDropdownShown && (
        <div className="absolute min-w-[200px] min-h-10 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 right-0 top-14 shadow-md z-10 p-2">
          <DropdownItem onClick={toggleDarkMode}>
            Dark mode {props.darkMode && <MdCheck />}
          </DropdownItem>
          <DropdownItem onClick={toggleIsolation}>
            Isolate colors {props.isolateColor && <MdCheck />}
          </DropdownItem>
          <DropdownItem>About</DropdownItem>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
