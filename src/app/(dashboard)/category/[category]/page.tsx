import Catalog from "@/app/components/ui/catalog/Catalog"
import CategoryService from "@/services/category/category.service"
import ProductService from "@/services/product/product.service"


interface IProductParams {
   
      category: string
  }


  interface ICategoryParams {
   
    params: {
        category: string
    }
}


async function getProducts(params: IProductParams) {
    console.log(params)
const {data: products} = await ProductService.getByCategory(
    params?.category as string
)

return {products}
}

export default async function CategoryPage ({params} : ICategoryParams) {
    
    const data = await getProducts(params)
    if (!data || !Array.isArray(data.products)) {
        return null; 
      }
    
    return (

            <Catalog products={data.products}/>
    )
}