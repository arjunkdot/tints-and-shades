import React from "react";
import { MdClose } from "react-icons/md";

const Announcement = ({
  toggleAnnouncement,
}: {
  toggleAnnouncement: () => void;
}) => {
  return (
    <div className="bg-yellow-200 py-4 my-2 text-center text-base md:text-md fixed -top-2 left-0 w-screen z-20">
      🎉 You can now access this app at{" "}
      <a href="https://getshades.co" className="font-bold underline">
        getshades.co
      </a>
      <button
        className="absolute right-4 top-4 md:top-3 flex items-center space-x-1 bg-yellow-300 duration-150 ease-linear px-1 md:px-2 py-1 hover:bg-yellow-400"
        onClick={() => toggleAnnouncement()}>
        <MdClose />
        <span className="hidden md:block">Close</span>
      </button>
    </div>
  );
};

export default Announcement;
