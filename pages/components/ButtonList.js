import React from "react";

const ButtonList = ({ text }) => {
  return (
    <div className="container mx-auto max-w-xs sm:max-w-lg my-1">
      <div className="flex justify-center border-2 rounded-md bg-blue-300">
        <div className="flex justify-center my-1 text-slate-900 text-base">
          {text}
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
