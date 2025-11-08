type UseButtonProps = {
    disabled?: boolean;
    loading?: boolean;
}

export function useButton({ disabled, loading }: UseButtonProps) {
    const isDisabled = disabled || loading;

    const baseStyle = "inline-flex items-center justify-center p-2 cursor-pointer";
    const stateStyle = isDisabled
        ? "opacity-50 cursor-not-allowed"
        : "hover:opacity-90";

    return { isDisabled, baseStyle, stateStyle };
}