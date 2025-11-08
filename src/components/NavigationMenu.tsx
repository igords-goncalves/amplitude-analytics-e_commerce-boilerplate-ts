import { ChevronDown } from "lucide-react";
import techstacklogo from "../assets/images/tech-stack-logo.svg";
import { Dropdown, Image } from "./_commons";

export function NavigationMenu() {
    return (
        <nav className="container flex items-center justify-between h-12 mx-auto">
            <a href="/" className="flex items-center">
                <Image
                    src={techstacklogo}
                    alt="Tech Stack Logo"
                    className="mr-2"
                    width={32}
                    height={32}
                    placeholder={
                        <div className="w-8 h-8 bg-gray-500 animate-pulse" />
                    }
                />
                <span className="text-lg font-bold">TechStack</span>
            </a>
            <Dropdown
                aria-label="Categorias"
                align="right"
                loading={false}
                rightIcon={<ChevronDown size={16} />}
                buttonClassName="text-[12px] text-gray-400! bg-[#232323]  px-4 py-2 rounded-md"
            >
                <a href="#">Menu Item 1</a>
            </Dropdown>
        </nav>
    );
}
