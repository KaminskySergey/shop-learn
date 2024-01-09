import CatalogItem from "./CatalogItem";
import { CatalogList } from "./CatalogList";

interface ICatalog { }

export default function Catalog({products}: any) {
    return <CatalogList>
        {products.map((product, index) => (
            <CatalogItem key={index} product={product} />
        ))}
    </CatalogList>
}
