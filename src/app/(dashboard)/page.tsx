import ProductService from '@/services/product/product.service'
import Catalog from '../components/ui/catalog/Catalog';



async function getProducts() {
  const {data} = await ProductService.getAll()
  return data;
}


export default async function Page() {
  const data = await getProducts()
  return <Catalog products={data}/>
}
