import { ICategory } from "./category.interface"
import { IReview } from "./review.interface"

export interface IProduct {
    id: number
    name: string
    description: string
    slug: string
    price: number | string
    rating: number,
    reviews: IReview[]
    images: string[]
    createdAt: string
    category: ICategory
    categoryId: number
}

export interface IProductDetails {
    product: IProduct
}