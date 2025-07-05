import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">
      <div className="w-[300px] h-[100px] flex justify-center items-end">
        <div className="loading-bar bg-red-500 rounded-[5px] w-[20px] h-[10px] mx-[5px] animate-wave"></div>
        <div className="loading-bar bg-red-500 rounded-[5px] w-[20px] h-[10px] mx-[5px] animate-wave [animation-delay:0.1s]"></div>
        <div className="loading-bar bg-red-500 rounded-[5px] w-[20px] h-[10px] mx-[5px] animate-wave [animation-delay:0.2s]"></div>
        <div className="loading-bar bg-red-500 rounded-[5px] w-[20px] h-[10px] mx-[5px] animate-wave [animation-delay:0.3s]"></div>
      </div>
    </div>
  );
};

export default Loader;
