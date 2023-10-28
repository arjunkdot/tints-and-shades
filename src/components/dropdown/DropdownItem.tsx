import React, { ReactNode } from "react";

interface DropdownItemTypes {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}
const DropdownItem = (props: DropdownItemTypes) => {
  return (
    <div onClick={props.onClick} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-slate-50 cursor-pointer ease-linear duration-150 rounded-sm flex justify-between items-center gap-1">
      {props.children}
    </div>
  );
};

export default DropdownItem;
