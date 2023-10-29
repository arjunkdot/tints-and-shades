import React from "react";
import {Link} from 'react-router-dom'
import {MdArrowLeft} from 'react-icons/md'

const Error = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-plex">
      <h1 className="text-lg">Invalid Color Code</h1>
      <Link to="/" className="mt-4 text-slate-600 hover:text-slate-800 ease-linear duration-150"><MdArrowLeft className="inline mr-1" />Go back</Link>
    </div>
  );
};

export default Error;
