import React, { forwardRef, InputHTMLAttributes } from "react";
import useInput from "./hooks/useInput";
import { Spinner } from "./Spinner";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    error?: boolean | string;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    inputSize?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        id,
        label,
        helperText,
        className = "",
        placeholder,
        error = false,
        loading = false,
        leftIcon,
        rightIcon,
        prefix,
        suffix,
        inputSize = "md",
        fullWidth = false,
        disabled = false,
        type = "text",
        onChange,
        ...props
    },
    ref
) {
    const { isDisabled, sizeClass, baseStyle, stateStyle } = useInput({
        disabled,
        loading,
        size: inputSize,
        error: !!error,
        fullWidth,
    });

    const containerClass = `${fullWidth ? "w-full" : "inline-block"}`;

    return (
        <div className={`${containerClass} ${className}`.trim()}>
            {label && (
                <label
                    htmlFor={id}
                    className="block text-[13px] mb-1 text-gray-700"
                >
                    {label}
                </label>
            )}

            <div
                className={`flex items-center rounded-md bg-[#232323] ${baseStyle} ${stateStyle}`.trim()}
            >
                {leftIcon && (
                    <span className="flex items-center pl-2 pr-2">
                        {leftIcon}
                    </span>
                )}

                {prefix && (
                    <div className="pl-2 pr-2 text-neutral-400">{prefix}</div>
                )}

                <input
                    id={id}
                    ref={ref}
                    className={`flex-1 outline-none ${sizeClass} ${
                        isDisabled ? "pointer-events-none" : ""
                    }`}
                    placeholder={placeholder}
                    aria-invalid={!!error}
                    disabled={isDisabled}
                    aria-disabled={isDisabled}
                    type={type}
                    onChange={onChange}
                    {...props}
                />

                {suffix && (
                    <div className="pl-2 pr-2 text-neutral-400">{suffix}</div>
                )}

                {loading ? (
                    <span className="flex items-center pl-2 pr-2">
                        <Spinner />
                    </span>
                ) : (
                    rightIcon && (
                        <span className="flex items-center pl-2 pr-2">
                            {rightIcon}
                        </span>
                    )
                )}
            </div>

            {helperText && (
                <div
                    className={`mt-1 text-[12px] ${
                        error ? "text-red-500" : "text-gray-500"
                    }`}
                >
                    {helperText}
                </div>
            )}
        </div>
    );
});

Input.displayName = "Input";

export default Input;
