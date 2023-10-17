import React from "react";

interface ColorBlockTypes {
  color: string;
}
const ColorBlock = (props: ColorBlockTypes) => {
  return (
    <div
      className="w-full h-32 bg-blue-500 flex items-center justify-center"
      style={{ background: props.color }}>
      {props.color}
    </div>
  );
};

export default ColorBlock;
