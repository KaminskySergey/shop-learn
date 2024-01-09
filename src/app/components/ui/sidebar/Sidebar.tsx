'use client'
import { useGetAllCategories } from "@/hooks/useCategories"
import CategoryService from "@/services/category/category.service"
import ProductService from "@/services/product/product.service"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Link from "next/link"
import CategoryList from "./CategoryList"
import CategoryItem from "./CategoryItem"

export const SideBar = () => {
    const {categories} = useGetAllCategories()
    return (
        <aside className="px-4 py-2 bg-black w-52">
            <CategoryList>
                  {
                    categories?.map((category) => (
                        <CategoryItem key={category.slug} category={category}/>
                    ))
                  }
            </CategoryList>
        </aside>
    )
}