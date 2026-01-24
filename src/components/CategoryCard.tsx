import { useNavigateCategory } from "../hooks/useNavigateCategory";

type CategoryCardProps = {
    color: string;
    name: string;
};

export function CategoryCard({ color, name }: CategoryCardProps) {
    const { handleNavigateToCategory } = useNavigateCategory();

    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                handleNavigateToCategory(name);
            }}
            className="cursor-pointer"
        >
            <ul
                className="p-3 rounded-lg h-fit"
                style={{
                    border: `solid ${color} 1px`,
                    backgroundColor: `${color}10`,
                }}
            >
                <li
                    className={`text-[${color}] font-bold hover:opacity-75`}
                    style={{ color }}
                >
                    {name}
                </li>
            </ul>
        </a>
    );
}
