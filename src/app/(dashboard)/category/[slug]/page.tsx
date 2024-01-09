import Catalog from "@/app/components/ui/catalog/Catalog"
import CategoryService from "@/services/category/category.service"
import ProductService from "@/services/product/product.service"

export async function generateStaticParams() {
    const categories = await CategoryService.getAll()

    const paths = categories.data.map(category => {
        return {
            params: {slug: category.slug}
        }
    })

    return paths
  }

async function getProducts(params) {
const {data: products} = await ProductService.getByCategory(
    params?.slug as string
)

const {data: categories} = await CategoryService.getBySlug(params?.slug as string)

return {products, categories}
}

export default async function CategoryPage ({params}) {
    const data = await getProducts(params)
    return (
        <Catalog products={data.products}/>
    )
}