
import { ReactNode } from "react"

interface ICategoryList {
    children: ReactNode
}

export default function CategoryList({children}: ICategoryList) {
    return <ul className="flex flex-col gap-2.5">{children}</ul>
}
