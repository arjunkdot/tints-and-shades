import React, { useRef } from "react";
import { Colors } from "hexashades";
import { MdOutlineShuffle } from "react-icons/md";

interface ColorInputTypes{
  setShadesAndTints: React.Dispatch<React.SetStateAction<any>>
}
const ColorInput = (props: ColorInputTypes) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    const color = new Colors();
    const tintsAndShades = color.createColors(inputValue, 10, true);
    props.setShadesAndTints(tintsAndShades);
    console.log(tintsAndShades);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-12 grid grid-cols-[15%_75%_10%] gap-2 items-center bg-white border border-slate-200">
      <div className="h-full bg-slate-50 border-r border-slate-200 inline-flex items-center px-2">
        <div className="w-5 h-5 bg-blue-700 rounded-full inline-block mr-1"></div>
        <span className="text-base ml-2 font-medium">%</span>
        <input
          className="h-full w-12 bg-transparent focus:outline-none ml-1 font-medium"
          type="number"
          step="0.1"
          min="1"
          max="100"
          defaultValue="10"
        />
      </div>
      <input
        type="text"
        className="px-2 w-full h-full font-medium focus:outline-none"
        defaultValue="#663399"
        ref={inputRef}
        placeholder="Type in a color code"
      />
      <button
        className="w-10 h-10 mx-auto flex items-center justify-center rounded-full duration-500 hover:bg-slate-100 hover:transition hover:duration-500 active:bg-slate-200 focus:bg-slate-200"
        aria-label="Randomize">
        <MdOutlineShuffle className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ColorInput;
