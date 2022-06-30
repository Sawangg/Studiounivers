import React, { DetailedHTMLProps, InputHTMLAttributes, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export type StepperProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {};

export const Stepper: React.FC<StepperProps> = ({
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const inc = () => {
        if (inputRef.current!.value !== inputRef.current!.max) inputRef.current!.value = (parseInt(inputRef.current!.value) + 1).toString();
    };

    const dec = () => {
        if (inputRef.current!.value !== inputRef.current!.min) inputRef.current!.value = (parseInt(inputRef.current!.value) - 1).toString();
    };

    const handleChange = () => {
        if (parseInt(inputRef.current!.value) > parseInt(inputRef.current!.max)) inputRef.current!.value = inputRef.current!.max;
        if (parseInt(inputRef.current!.value) < parseInt(inputRef.current!.min)) inputRef.current!.value = inputRef.current!.min;
    };

    return (
        <div className="bg-white-300 flex flex-row items-center w-full">
            <button data-action="decrement" className="h-full w-20 rounded-l cursor-pointer outline-none" onClick={dec}>
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
            <button data-action="increment" className="h-full w-20 rounded-r cursor-pointer" onClick={inc}>
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
    );
};

