import { ReactNode } from "react"

interface ICatalogList {
    children: ReactNode
}

export const CatalogList = ({ children }: ICatalogList) => {
    return (
        <ul className="grid grid-cols-5 gap-5">
            {children}
        </ul>
    )
}