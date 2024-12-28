import { CategoryItem } from "./category-item/category-item"

export const Categories = () => {
    return (
        <div className="py-4 flex gap-2 px-4 w-full overflow-x-auto">
            <CategoryItem name="Peinados" />
            <CategoryItem name="Uñas" />
            <CategoryItem name="Pestañas" />
            <CategoryItem name="Cejas" />
            <CategoryItem name="Maquillaje" />
        </div>
    )
}