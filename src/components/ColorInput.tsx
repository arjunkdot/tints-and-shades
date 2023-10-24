import React, { useEffect, useRef, useState } from "react";
import { Colors } from "hexashades";
import { MdOutlineShuffle } from "react-icons/md";
interface ColorInputTypes {
  setColors: React.Dispatch<React.SetStateAction<any>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<any>>;
  currentColor: string;
}
const ColorInput = (props: ColorInputTypes) => {
  const [error, setError] = useState(false);
  // const [currentColor, setCurrentColor] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const percentageRef = useRef<HTMLInputElement>(null);
  const color = new Colors();

  useEffect(() => {
    props.setColors(color.createColors("663399", 5, true));
    props.setCurrentColor("663399")
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Reset
    setError(false);
    let inputValue = inputRef.current?.value;
    const percentageValue = +percentageRef.current!.value;
    // Check if the input contains hash, and remove it
    if (inputValue?.indexOf("#") !== -1) {
      inputValue = inputValue?.slice(1, inputValue.length);
    }
    try {
      const tintsAndShades = color.createColors(
        inputValue,
        percentageValue,
        true
      );
      props.setColors(tintsAndShades);
      props.setCurrentColor(inputValue)
    } catch (e) {
      setError(true);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full h-12 flex gap-2 items-center  border ${
        !error ? "border-slate-200 bg-white" : "border-red-600 bg-red-50"
       } duration-150 ease-linear`}>
      <div
        className={`h-full bg-slate-50 border-r ${
          !error ? "border-slate-200" : "border-red-600"
        }
       } inline-flex items-center px-2 duration-150 ease-linear `}>
        <div
          className="w-5 h-5 rounded-full inline-block mr-1"
          style={{ backgroundColor: `#${props.currentColor}` }}></div>
        <span className="text-base ml-2 font-medium">%</span>
        <input
          className="h-full w-12 bg-transparent focus:outline-none ml-1 font-medium"
          type="number"
          step="0.1"
          min="1"
          max="100"
          defaultValue="5"
          ref={percentageRef}
        />
      </div>
      <input
        type="text"
        className="px-2 w-full h-full font-medium bg-transparent focus:outline-none"
        defaultValue="#663399"
        ref={inputRef}
        placeholder="Type in a color code"
      />
      <button
        className="w-10 h-10 mx-auto absolute right-1 flex items-center justify-center duration-500 hover:bg-slate-100 hover:transition hover:duration-500 active:bg-slate-200 focus:bg-slate-200"
        aria-label="Randomize">
        <MdOutlineShuffle className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ColorInput;
