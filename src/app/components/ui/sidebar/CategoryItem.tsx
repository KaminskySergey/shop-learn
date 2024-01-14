'use client'
import { ICategoryItem } from "@/types/category.interface";
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function CategoryItem({category}: ICategoryItem) {
    const pathname = usePathname()
    const isActive = pathname.replace(/%20/g, ' ') === `/category/${category.replace(/%20/g, ' ')}`;
    const firstUpperCase = category.charAt(0).toUpperCase() + category.slice(1);
    return <li className="list-none">
    <Link
      className={`block py-2 px-4 rounded transition-all ease-in-out ${isActive ? 'text-yellow-500 bg-gray-800' : 'text-white hover:bg-gray-700'}`}
      href={`/category/${category}`}
    >
      {firstUpperCase}
    </Link>
  </li>
}
