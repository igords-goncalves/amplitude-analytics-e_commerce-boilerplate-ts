import { useEffect, useRef, useState } from "react";

type useDropdownProps = {
    disabled?: boolean;
    loading?: boolean;
    align?: "left" | "right" | "center";
    onToggle?: (open: boolean) => void;
    closeOnBlur?: boolean;
};

export function useDropdown({
    disabled = false,
    loading = false,
    align = "left",
    onToggle,
    closeOnBlur = true,
}: useDropdownProps) {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const isDisabled = disabled || loading;

    function focusFirstMenuItem() {
        const menuReferenceElement = menuRef.current;
        if (!menuReferenceElement) return;
        const focusable = menuReferenceElement.querySelector<HTMLElement>(
            'button, [href], [tabindex]:not([tabindex="-1"]), input, select, textarea'
        );
        focusable?.focus();
    }

    useEffect(() => {
        if (!open) return;

        function handleDocumentClick(e: MouseEvent) {
            if (!menuRef.current || !buttonRef.current) return;
            const target = e.target as Node;
            if (
                !menuRef.current.contains(target) &&
                !buttonRef.current.contains(target)
            ) {
                if (closeOnBlur) {
                    setOpen(false);
                    onToggle?.(false);
                }
            }
        }

        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setOpen(false);
                onToggle?.(false);
                buttonRef.current?.focus();
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                focusFirstMenuItem();
            }
        }

        document.addEventListener("click", handleDocumentClick);
        document.addEventListener("keydown", handleKey);

        // foco o primeiro item depois de abrir (microtask)
        setTimeout(() => focusFirstMenuItem(), 0);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
            document.removeEventListener("keydown", handleKey);
        };
    }, [open, onToggle, closeOnBlur]);

    function toggle(element?: React.MouseEvent) {
        if (isDisabled) return;

        const next = !open;
        setOpen(next);
        onToggle?.(next);
        buttonRef.current?.focus();
    }

    const menuAlignClass =
        align === "right"
            ? "right-0"
            : align === "center"
            ? "left-1/2 transform -translate-x-1/2"
            : "left-0";

    return {
        open,
        isDisabled,
        buttonRef,
        menuRef,
        menuAlignClass,
        toggle,
    };
}
