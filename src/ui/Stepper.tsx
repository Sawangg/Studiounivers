"use client";

import React, { DetailedHTMLProps, InputHTMLAttributes, useEffect, useRef, useState } from "react";

export type StepperProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  onStepperButtonIncrease?: () => void;
  onStepperButtonDecrease?: () => void;
};

export const Stepper: React.FC<StepperProps> = ({ onStepperButtonIncrease, onStepperButtonDecrease, ...props }) => {
  const [disabled, setDisabled] = useState({ min: false, max: false });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current)
      setDisabled({
        min: inputRef.current.value === inputRef.current.min,
        max: inputRef.current.value === inputRef.current.max,
      });
  }, []);

  const inc = () => {
    if (inputRef.current!.value !== inputRef.current!.max)
      inputRef.current!.value = (parseInt(inputRef.current!.value) + 1).toString();
    if (onStepperButtonIncrease) onStepperButtonIncrease();
  };

  const dec = () => {
    if (inputRef.current!.value !== inputRef.current!.min)
      inputRef.current!.value = (parseInt(inputRef.current!.value) - 1).toString();
    if (onStepperButtonDecrease) onStepperButtonDecrease();
  };

  const handleChange = () => {
    if (parseInt(inputRef.current!.value) > parseInt(inputRef.current!.max))
      inputRef.current!.value = inputRef.current!.max;
    if (parseInt(inputRef.current!.value) < parseInt(inputRef.current!.min))
      inputRef.current!.value = inputRef.current!.min;
  };

  return (
    <div className="flex w-full flex-row items-center bg-white-300">
      <button
        data-action="decrement"
        className="h-full w-20 cursor-pointer rounded-l outline-none disabled:cursor-not-allowed disabled:text-white-400"
        onClick={dec}
        disabled={inputRef.current ? inputRef.current.value === inputRef.current.min : disabled.min}
      >
        <span className="m-auto text-2xl font-thin">-</span>
      </button>
      <input
        type="number"
        ref={inputRef}
        className="text-md flex w-full items-center bg-white-300 px-4 py-4 text-center
                    font-semibold outline-none hover:text-black focus:text-black focus:outline-none"
        onChange={handleChange}
        {...props}
      />
      <button
        data-action="increment"
        className="h-full w-20 cursor-pointer rounded-r disabled:cursor-not-allowed disabled:text-white-400"
        onClick={inc}
        disabled={inputRef.current ? inputRef.current.value === inputRef.current.max : disabled.max}
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  );
};
