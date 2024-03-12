import React from "react";

const Display = ({ state }) => {
  return (
    <>
      <div className="bg-black text-right text-white text-3xl pt-10 h-24 mb-4 pr-2">
        {state}
      </div>
    </>
  );
};

export default Display;
