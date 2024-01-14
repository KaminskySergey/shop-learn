import ProductService from '@/services/product/product.service'
import Catalog from '../components/ui/catalog/Catalog';
import NotFound from './not-found';



async function getProducts() {
  const {data} = await ProductService.getAll()
  return data;
}


export default async function Page() {
  const data = await getProducts()
  if(!data) return NotFound()
  return <Catalog products={data}/>
}
