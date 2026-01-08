import { CategoryCard } from "./CategoryCard";

const categories = [
    { name: "Framework", image: "" },
    { name: "Biblioteca", image: "" },
    { name: "Linguagem", image: "" },
    { name: "Ferramenta", image: "" },
];

export function CategoriesSwipper() {
    return (
        <section className="container grid grid-cols-4 gap-4 mx-auto categories-swipper">
            <h2 className="col-span-4 text-lg font-bold">
                Principais categorias
            </h2>
            {categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
            ))}
        </section>
    );
}
