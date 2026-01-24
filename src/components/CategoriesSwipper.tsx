import { categories } from "../constants/categories";
import { CategoryCard } from "./CategoryCard";

export function CategoriesSwipper() {
    return (
        <section className="container grid grid-cols-4 gap-4 mx-auto categories-swipper">
            <h2 className="col-span-4 text-lg font-bold">
                Principais categorias
            </h2>
            {categories.map((category, index) => (
                <CategoryCard
                    key={index}
                    color={category.color}
                    name={category.name}
                />
            ))}
        </section>
    );
}
