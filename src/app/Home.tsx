import Catalog from "./components/ui/catalog/Catalog";

export default function HomeComponent({ products }: any) {
    return (
        <>
            <Catalog products={products}/>
        </>
    )
}