import React, { useEffect, useRef, useState } from "react";
import { Colors } from "hexashades";
import { MdOutlineShuffle } from "react-icons/md";
import { ChromePicker } from "react-color";
import useClickOutside from "../hooks/useClickOutside";
interface ColorInputTypes {
  setColors: React.Dispatch<React.SetStateAction<any>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<any>>;
  currentColor: string;
}
const ColorInput = (props: ColorInputTypes) => {
  const [error, setError] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const percentageRef = useRef<HTMLInputElement>(null);
  const colorPickerContainerRef = useRef<HTMLDivElement>(null);

  const isClickOutside = useClickOutside(colorPickerContainerRef);

  useEffect(() => {
    if (isClickOutside) {
      setShowColorPicker(false);
    }
  }, [isClickOutside]);

  const color = new Colors();

  const randomHex = (size: number) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");

  useEffect(() => {
    const hex = randomHex(6);
    props.setColors(color.createColors(hex, 10, true));
    props.setCurrentColor(hex);
    inputRef.current!.value = `#${hex}`;
  }, []);

  const handleRandom = (e: React.FormEvent) => {
    e.preventDefault();
    const hex = randomHex(6);
    props.setColors(
      color.createColors(hex, +percentageRef.current!.value, true)
    );
    props.setCurrentColor(hex);

    inputRef.current!.value = "";
    inputRef.current!.value = `#${hex}`;
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  type ColorPickerType = {
    hex: string;
  };
  const handleColorPicker = (color: ColorPickerType) => {
    applyColors(color.hex.slice(1, 7));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Reset error
    setError(false);
    let inputValue = inputRef.current?.value;
    // Check if the input contains hash, and remove it
    if (inputValue?.indexOf("#") !== -1) {
      inputValue = inputValue?.slice(1, inputValue.length);
    }
    applyColors(inputValue);
  };

  const applyColors = (inputValue: string | undefined) => {
    const percentageValue = +percentageRef.current!.value;
    try {
      const tintsAndShades = color.createColors(
        inputValue,
        percentageValue,
        true
      );
      props.setColors(tintsAndShades);
      props.setCurrentColor(inputValue);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative w-[calc(100vw_-_105px)] md:w-[calc(100vw_-_132px)] shrink-0 h-12 flex gap-2 items-center  border ${
        !error
          ? "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
          : "border-red-600 bg-red-50 dark:bg-red-950"
      } border-r duration-150 ease-linear`}>
      <div
        className={`h-full bg-slate-50 dark:bg-slate-700 border-r ${
          !error ? "border-slate-200 dark:border-slate-800" : "border-red-600"
        }
       } inline-flex items-center px-2 duration-150 ease-linear `}>
        <div
          onClick={toggleColorPicker}
          className="w-5 h-5 rounded-full inline-block mr-1  cursor-pointer"
          style={{ backgroundColor: `#${props.currentColor}` }}></div>
        {showColorPicker && (
          <div ref={colorPickerContainerRef}>
            <ChromePicker
              color={`#${props.currentColor}`}
              disableAlpha={true}
              onChange={handleColorPicker}
              className="fixed top-16 left-5"
            />
          </div>
        )}
        <span className="text-base ml-2 font-medium dark:text-slate-50">%</span>
        <input
          className="h-full w-12 bg-transparent focus:outline-none ml-1 font-medium dark:text-slate-50"
          type="number"
          step="0.1"
          min="1"
          max="100"
          defaultValue="10"
          ref={percentageRef}
        />
      </div>
      <input
        type="text"
        className="px-2 w-full h-full font-medium bg-transparent focus:outline-none dark:text-slate-50"
        defaultValue={`${props.currentColor}`}
        ref={inputRef}
        placeholder="Type in a color code"
      />
      <button type="submit" className="invisible">
        Submit
      </button>
      <button
        type="button"
        className="w-10 h-10 mx-auto absolute right-1 flex items-center justify-center duration-500 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 hover:transition hover:duration-500 active:bg-slate-200 focus:bg-slate-200 dark:active:bg-slate-900 dark:focus:bg-slate-900"
        aria-label="Randomize"
        onClick={handleRandom}>
        <MdOutlineShuffle className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ColorInput;
