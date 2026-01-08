import { useMemo } from "react";

type UseInputProps = {
    disabled?: boolean;
    loading?: boolean;
    size?: "sm" | "md" | "lg";
    error?: boolean | string;
    fullWidth?: boolean;
    inputClassName?: string;
};

export function useInput({
    disabled = false,
    loading = false,
    size = "md",
    error = false,
    fullWidth = false,
    inputClassName = "",
}: UseInputProps) {
    const isDisabled = disabled || loading;

    const sizeClass = useMemo(() => {
        switch (size) {
            case "sm":
                return "py-1 text-sm";
            case "lg":
                return "py-3 text-base";
            case "md":
            default:
                return "py-2 text-sm";
        }
    }, [size]);

    const baseStyle = useMemo(() => {
        const width = fullWidth ? "w-full" : "inline-block";
        return `${width} outline-none rounded-md`;
    }, [fullWidth, inputClassName]);

    const stateStyle = useMemo(() => {
        if (isDisabled) return "opacity-60 cursor-not-allowed";
        if (error) return "border-red-500 ring-1 ring-red-400 text-red-900";
    }, [isDisabled, error]);

    return {
        isDisabled,
        sizeClass,
        baseStyle,
        stateStyle,
    };
}

export default useInput;
