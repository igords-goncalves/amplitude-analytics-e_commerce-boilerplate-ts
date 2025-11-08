export function CategoryCard({ category }: { category: string }) {
    return (
        <ul className="p-3 bg-gray-900 rounded-lg h-80">
            <li key={category}>{category}</li>
        </ul>
    );
}
