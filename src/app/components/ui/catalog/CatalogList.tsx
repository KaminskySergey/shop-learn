import { ReactNode } from "react"

interface ICatalogList {
    children: ReactNode
}

export const CatalogList = ({ children }: ICatalogList) => {
    return (
        <ul className="grid grid-cols-6 gap-6">
            {children}
        </ul>
    )
}