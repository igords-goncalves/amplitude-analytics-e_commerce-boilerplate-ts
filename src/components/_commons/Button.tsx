import "../../assets/css/button.css";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: () => void;
    children: React.ReactNode;
};

export function Button({
    onClick,
    children,
    type,
    id,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
            type={type}
            id={id}
            {...props}
        >
            {children}
        </button>
    );
}
