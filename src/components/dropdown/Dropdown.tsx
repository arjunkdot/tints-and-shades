import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCheck } from "react-icons/md";
import useClickOutside from "../../hooks/useClickOutside";
import DropdownItem from "./DropdownItem";

interface DropdownTypes {
  setIsolateColor: React.Dispatch<React.SetStateAction<boolean>>;
  isolateColor: boolean;
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
    props.setIsolateColor(!props.isolateColor);
    setIsDropdownShown(false);
  };
  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={handleDropdownToggle}
        className="w-12 h-12 bg-slate-100 hover:bg-slate-200 ease-linear duration-150 border border-slate-200 border-l-0 flex items-center justify-center">
        <BsThreeDotsVertical />
      </button>
      {isDropdownShown && (
        <div className="absolute min-w-[200px] min-h-10 bg-white border border-slate-100 right-0 top-14 shadow-md z-10 p-2">
          <DropdownItem>Dark mode</DropdownItem>
          <DropdownItem onClick={toggleIsolation}>
            Isolate colors {props.isolateColor && <MdCheck/>}
          </DropdownItem>
          <DropdownItem>About</DropdownItem>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
