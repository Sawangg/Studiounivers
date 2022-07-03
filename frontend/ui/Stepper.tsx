import React, { DetailedHTMLProps, InputHTMLAttributes, useRef } from "react";

export type StepperProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    onStepperButtonIncrease?: () => void;
    onStepperButtonDecrease?: () => void;
};

export const Stepper: React.FC<StepperProps> = ({
    onStepperButtonIncrease,
    onStepperButtonDecrease,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const inc = () => {
        if (inputRef.current!.value !== inputRef.current!.max) inputRef.current!.value = (parseInt(inputRef.current!.value) + 1).toString();
        if (onStepperButtonIncrease) onStepperButtonIncrease();
    };

    const dec = () => {
        if (inputRef.current!.value !== inputRef.current!.min) inputRef.current!.value = (parseInt(inputRef.current!.value) - 1).toString();
        if (onStepperButtonDecrease) onStepperButtonDecrease();
    };

    const handleChange = () => {
        if (parseInt(inputRef.current!.value) > parseInt(inputRef.current!.max)) inputRef.current!.value = inputRef.current!.max;
        if (parseInt(inputRef.current!.value) < parseInt(inputRef.current!.min)) inputRef.current!.value = inputRef.current!.min;
    };

    return (
        <div className="bg-white-300 flex flex-row items-center w-full">
            <button data-action="decrement" className="h-full w-20 rounded-l cursor-pointer outline-none disabled:text-white-400 disabled:cursor-not-allowed" onClick={dec} disabled={inputRef.current ? inputRef.current.value === inputRef.current.min : false}>
                <span className="m-auto text-2xl font-thin">-</span>
            </button>
            <input
                type="number"
                ref={inputRef}
                className="bg-white-300 focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black
                    flex items-center outline-none py-4 px-4"
                onChange={handleChange}
                {...props}
            />
            <button data-action="increment" className="h-full w-20 rounded-r cursor-pointer disabled:text-white-400 disabled:cursor-not-allowed" onClick={inc} disabled={inputRef.current ? inputRef.current.value === inputRef.current.max : false}>
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
    );
};

