import { instance } from "@/api/interceptor"
import { ICategoryItem } from "@/types/category.interface"

const CATEGORIES = 'products/categories'

const CategoryService = {
 async getAll() {
    return instance<ICategoryItem[]>({
        url: CATEGORIES,
        method: 'GET'
    })
 },

 async getById(id: string | number) {
    return instance<ICategoryItem>({
        url: `${CATEGORIES}/${id}`,
        method: 'GET'
    })
 },

}

export default CategoryService