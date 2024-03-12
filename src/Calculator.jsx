import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const Calculator = () => {
  const [display, setDisplay] = useState(0);
  const [prevValue, setPreValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [reset, setReset] = useState(null);

  const handleClick = (label, type) => {
    if (type === "number") {
      if (display === 0) {
        setDisplay(label);
      } else {
        setDisplay(parseInt(display) + label);
      }
    } else if (type === "operator") {
      if (label === "=") {
        const result = calculate(prevValue, parseInt(display), operator);
        setDisplay(result);
        setPreValue(result);
        setOperator(null);
      } else {
        setPreValue(parseInt(display));
        console.log(display);
        setOperator(label);
        setDisplay(0);
        if (operator != "=") {
          setPreValue(prevValue + parseInt(display));
        }
      }
    } else if (type === "function") {
      handleFunction(label);
    }
  };

  const handleFunction = (label) => {
    switch (label) {
      case "AC":
        setDisplay(0);
        setPreValue(null);
        setOperator(null);
        break;
      case "+/-":
        setDisplay(parseFloat(display) * -1);
        break;
      case "%":
        setDisplay(parseInt(display) / 100);
        break;
      default:
        break;
    }
  };

  const calculate = (a, b, operator) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "x":
        return a * b;
      case "/":
        return a / b;
      default:
        return 0;
    }
  };

  const calcdata = [
    [
      { label: "AC", type: "function" },
      { label: "-/+", type: "function" },
      { label: "%", type: "function" },
      { label: "/", type: "operator" },
    ],
    [
      { label: "7", type: "number" },
      { label: "8", type: "number" },
      { label: "9", type: "number" },
      { label: "x", type: "operator" },
    ],
    [
      { label: "4", type: "number" },
      { label: "5", type: "number" },
      { label: "6", type: "number" },
      { label: "-", type: "operator" },
    ],
    [
      { label: "1", type: "number" },
      { label: "2", type: "number" },
      { label: "3", type: "number" },
      { label: "+", type: "operator" },
    ],
    [
      { label: "0", type: "number", size: "double" },
      { label: ".", type: "operator" },
      { label: "=", type: "operator" },
    ],
  ];
  return (
    <>
      <div className="w-full h-screen ">
        <h1 className="text-5xl text-blue-500  text-center py-8 font-semibold">
          Calculator
        </h1>
        <div className="md:w-[27%] w-[85%] py-5 px-5 shadow-lg mx-auto rounded-md bg-gray-200">
          <Display state={display} />
          <div className="grid grid-cols-4  gap-2 ">
            {calcdata.flat().map((data, index) => {
              return <Button key={index} {...data} handleClick={handleClick} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
