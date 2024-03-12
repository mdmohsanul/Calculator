import React from "react";

const Button = ({ label, type, size, handleClick }) => {
  const baseStyle = "flex items-center justify-center  rounded-full text-xl ";

  const operatorStyle = "bg-gray-600 text-2xl text-white";
  const numberStyle = "bg-gray-300 text-black font-semibold";
  const functionStyle = "bg-red-400 text-white";
  let btnSize =
    size === "double"
      ? "h-16 w-36 col-span-2 md:h-20 md:w-46 "
      : "h-16 w-16 md:h-20 md:w-20 ";
  let btnStyle = `${baseStyle} ${btnSize}`;

  if (type === "number") {
    btnStyle += numberStyle;
  } else if (type === "operator") {
    btnStyle += operatorStyle;
  } else if (type === "function") {
    btnStyle += functionStyle;
  }
  return (
    <>
      <button onClick={() => handleClick(label, type)} className={btnStyle}>
        {label}
      </button>
    </>
  );
};

export default Button;
