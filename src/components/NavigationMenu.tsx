import { ChevronDown, SearchIcon, ShoppingCart } from "lucide-react";
import { Button, Dropdown, Image, Input } from "./_commons";
import techstacklogo from "../assets/images/tech-stack-logo.svg";

function DropdownItems() {
    return (
        <>
            <a
                className="block px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:bg-white/5 hover:text-text-dark"
                href="#"
            >
                Framework
            </a>
            <a
                className="block px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:bg-white/5 hover:text-text-dark"
                href="#"
            >
                Biblioteca
            </a>
            <a
                className="block px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:bg-white/5 hover:text-text-dark"
                href="#"
            >
                Linguagem
            </a>
            <a
                className="block px-3 py-2 text-sm font-medium rounded-md text-neutral-400 hover:bg-white/5 hover:text-text-dark"
                href="#"
            >
                Ferramenta
            </a>
        </>
    );
}

function NavigationBrand() {
    return (
        <nav>
            <div className="flex gap-4">
                <a href="/" className="flex items-center">
                    <Image
                        src={techstacklogo}
                        alt="Tech Stack Logo"
                        className="mr-2"
                        width={32}
                        height={32}
                        placeholder={
                            <div className="w-8 h-8 bg-neutral-400 animate-pulse" />
                        }
                    />
                    <span className="text-lg font-bold">TechStack Store</span>
                </a>
                <Dropdown
                    aria-label="Categorias"
                    align="right"
                    loading={false}
                    rightIcon={<ChevronDown size={16} />}
                    buttonClassName="text-sm font-medium text-neutral-400 bg-[#232323]  px-4 py-2 rounded-md"
                >
                    <DropdownItems />
                </Dropdown>
            </div>
        </nav>
    );
}

function NavigationActions() {
    return (
        <div className="flex items-end justify-end flex-1 gap-4">
            <Input
                id="search"
                name="search"
                fullWidth
                placeholder="Pesquise por linguagens, frameworks..."
                leftIcon={<SearchIcon size={16} className="text-neutral-400" />}
                className="max-w-96"
                type="search"
            />

            <Button className="relative flex px-2 py-2 h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-[#232323]">
                <span className="material-symbols-outlined">
                    <ShoppingCart
                        size={18}
                        className="font-medium text-neutral-400"
                    />
                </span>
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full -right-3 -top-1 bg-neutral-950">
                    3
                </span>
            </Button>
        </div>
    );
}

export function NavigationMenu() {
    return (
        <div className="fixed top-0 left-0 z-50 w-full bg-[#191919b6] border-b backdrop-blur border-[#232323]">
            <div className="container flex items-center justify-between h-12 mx-auto">
                <NavigationBrand />
                <NavigationActions />
            </div>
        </div>
    );
}
