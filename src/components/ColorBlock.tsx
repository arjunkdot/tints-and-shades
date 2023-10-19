import React, { useState } from "react";
import colorContrast from 'color-contrast';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy, MdCheck } from "react-icons/md";
interface ColorBlockTypes {
  color: string;
}
const ColorBlock = (props: ColorBlockTypes) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 750);
  };
  return (
    <CopyToClipboard onCopy={handleCopy} text={props.color}>
      <div
        id={props.color}
        className="w-full h-32 bg-blue-500 rounded-md flex flex-[1_1_200px] items-center justify-center transition-all duration-150 hover:shadow-sm hover:scale-[101%] hover:duration-150 cursor-pointer group"
        style={{ background: props.color }}>
        <span className={`${(colorContrast('#000000', props.color) >= 4) ? 'text-black' : 'text-white'} opacity-100 duration-150 transition-opacity group-hover:hidden group-hover:duration-150 group-hover:transition-opacity group-hover:opacity-0`}>
          {props.color}
        </span>
        {!isCopied ? (
          <button className="rounded-full bg-gray-50 py-1 px-4 drop-shadow-sm opacity-0 duration-150 transition-opacity hidden group-hover:flex group-hover:items-center group-hover:duration-150 group-hover:transition-opacity group-hover:opacity-100">
            <MdContentCopy />
            <span>Copy</span>
          </button>
        ) : (
          <span className="rounded-full bg-gray-50 py-1 px-4 drop-shadow-sm opacity-0 duration-150 transition-opacity hidden group-hover:flex group-hover:items-center group-hover:duration-150 group-hover:transition-opacity group-hover:opacity-100">
            <MdCheck />
            Copied
          </span>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBlock;
