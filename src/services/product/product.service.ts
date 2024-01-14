import { instance } from "@/api/interceptor"
import { IProduct } from "@/types/product.interface"

const PRODUCTS = 'products'

const ProductService = {
 async getAll() {
    return instance<IProduct[]>({
        url: PRODUCTS,
        method: 'GET',
    })
 },



 async getById(productId: number) {
    return instance<IProduct>({
        url: `${PRODUCTS}/${productId}`,
        method: 'GET'
    })
 },

 async getByCategory(category: string ) {
    return instance<IProduct>({
        url: `${PRODUCTS}/category/${category}`,
        method: 'GET'
    })
 },
}

export default ProductService