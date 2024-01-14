'use client'
import { useGetAllCategories } from "@/hooks/useCategories"
import CategoryList from "./CategoryList"
import CategoryItem from "./CategoryItem"

export const SideBar = () => {
    const {categories} = useGetAllCategories()
    return (
        <aside className="px-8 py-4 bg-black w-52">
            <CategoryList>
                  {
                    categories?.map((category, index) => (
                        <CategoryItem key={index} category={category}/>
                    ))
                  }
            </CategoryList>
        </aside>
    )
}