import { CategoryCard } from "./CategoryCard";

export function CategoriesSwipper() {
    return (
        <section className="container grid grid-cols-4 gap-4 mx-auto categories-swipper">
            <h2 className="col-span-4 text-lg font-bold">Principais categorias</h2>
            {["Framework", "Biblioteca", "Linguagem", "Ferramenta"].map(
                (category) => (
                    <CategoryCard key={category} category={category} />
                )
            )}
        </section>
    );
}
