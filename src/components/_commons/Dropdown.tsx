import React from "react";
import { Button } from "./Button";
import { useDropdown } from "./hooks/useDropdown";

type DropdownProps = {
    children: React.ReactNode;
    label?: React.ReactNode;
    buttonClassName?: string;
    className?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    loading?: boolean;
    align?: "left" | "right" | "center";
    id?: string;
    onToggle?: (open: boolean) => void;
    closeOnBlur?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Dropdown({
    children,
    label,
    className = "",
    buttonClassName = "",
    leftIcon,
    rightIcon,
    iconPosition = "right",
    disabled = false,
    loading = false,
    align = "left",
    id,
    onToggle,
    closeOnBlur = true,
    ...props
}: DropdownProps) {
    const hookProps = {
        disabled,
        loading,
        align,
        onToggle,
        closeOnBlur,
    };

    const { open, isDisabled, buttonRef, menuRef, menuAlignClass, toggle } =
        useDropdown({ ...hookProps });

    return (
        <div className={`relative inline-block ${className}`.trim()}>
            <Button
                id={id}
                ref={buttonRef}
                type={props.type ?? "button"}
                className={buttonClassName}
                onClick={toggle}
                aria-haspopup="menu"
                aria-expanded={open}
                disabled={isDisabled}
                loading={loading}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                iconPosition={iconPosition}
                {...props}
            >
                <span className="truncate">
                    {label ?? props["aria-label"] ?? ""}
                </span>
            </Button>

            {open && (
                <div
                    ref={menuRef}
                    role="menu"
                    aria-hidden={!open}
                    aria-labelledby={id}
                    tabIndex={-1}
                    className={`absolute z-50 mt-1 min-w-32 ${menuAlignClass} bg-[#232323] text-gray-400 rounded-md shadow-lg p-2 text-[12px]`}
                >
                    {children}
                </div>
            )}
        </div>
    );
}

Dropdown.displayName = "Dropdown";

export default Dropdown;
