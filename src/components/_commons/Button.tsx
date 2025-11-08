import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { Spinner } from "./Spinner";
import { useButton } from "./hooks/useButton";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    iconPosition?: "left" | "right";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        onClick,
        children,
        type,
        id,
        className = "",
        disabled = false,
        loading = false,
        iconPosition = "right",
        leftIcon,
        rightIcon,
        ...props
    },
    ref
) {
    const { isDisabled, baseStyle, stateStyle } = useButton({ disabled, loading });

    return (
        <button
            ref={ref}
            className={`${className} ${baseStyle} ${stateStyle}`.trim()}
            onClick={onClick}
            type={type}
            id={id}
            disabled={isDisabled}
            aria-busy={loading}
            aria-disabled={isDisabled}
            {...props}
        >
            {loading && iconPosition === "left" ? (
                <span className="inline-flex items-center">{<Spinner />}</span>
            ) : (
                leftIcon && <span className="inline-flex items-center mr-2">{leftIcon}</span>
            )}

            <span>{children}</span>

            {loading && iconPosition === "right" ? (
                <span className="inline-flex items-center ml-2">{<Spinner />}</span>
            ) : (
                rightIcon && <span className="inline-flex items-center ml-2">{rightIcon}</span>
            )}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
