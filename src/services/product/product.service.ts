import { instance } from "@/api/interceptor"
import { IFilters, IProduct } from "./product.interface"

const PRODUCTS = 'products'

const ProductService = {
 async getAll(queryParams = {} as IFilters) {
    return instance<IProduct[]>({
        url: PRODUCTS,
        method: 'GET',
        params: queryParams
    })
 },

 async getById(productId: string | number) {
    return instance<IProduct>({
        url: `${PRODUCTS}/${productId}`,
        method: 'GET'
    })
 },

 async getSimilar(productId: string | number) {
    return instance<IProduct>({
        url: `${PRODUCTS}/similar/${productId}`,
        method: 'GET'
    })
 },

 async getBySlug(productId: string | number) {
    return instance<IProduct>({
        url: `${PRODUCTS}/by-slug/${productId}`,
        method: 'GET'
    })
 },

 async getByCategory(categorySlug: string | number) {
    return instance<IProduct>({
        url: `${PRODUCTS}/by-category/${categorySlug}`,
        method: 'GET'
    })
 },

 async create() {
    return instance<IProduct>({
        url: PRODUCTS,
        method: 'POST'
    })
 },

 async update(id: string | number, data: IProduct) {
    return instance<IProduct>({
        url: `${PRODUCTS}/${id}`,
        method: 'PUT',
        data
    })
 },

 async delete(id: string | number) {
    return instance<IProduct>({
        url: `${PRODUCTS}/${id}`,
        method: 'DELETE',
        
    })
 },
}

export default ProductService