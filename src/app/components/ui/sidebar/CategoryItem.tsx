'use client'
import { ICategory } from "@/types/category.interface"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface ICategoryItem {
    category: ICategory
}

export default function CategoryItem({category}: ICategoryItem) {
    const pathname = usePathname()
    const isActive = pathname === `/category/${category.slug}`;
    console.log(isActive)
    return <li>
        <Link className={`${isActive ? 'text-yellow-500' : 'text-white'}`} href={`/category/${category.slug}`}>
            {category.name}
    </Link>
    </li>
}
