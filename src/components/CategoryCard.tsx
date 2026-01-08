export function CategoryCard({ category }: { category: { name: string; image: string } }) {
    return (
        <a href="#">
            <ul className="p-3 bg-[#232323] rounded-lg h-60">
                <li>{category.name}</li>
            </ul>
        </a>
    );
}
