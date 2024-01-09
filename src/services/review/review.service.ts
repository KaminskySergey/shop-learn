import { instance } from "@/api/interceptor"
import { IReview } from "@/types/review.interface"
import { ILeave } from "./review.interface"
const REVIEWS = 'reviews'

export const ReviewsService = {
 async getAll() {
    return instance<IReview[]>({
        url: REVIEWS,
        method: 'GET'
    })
 },

 async getAverageByProduct(productId: string | number) {
    return instance<IReview>({
        url: `${REVIEWS}/average-by-product/${productId}`,
        method: 'GET'
    })
 },

 async leave(productId: string | number, data: ILeave) {
    return instance<IReview>({
        url: `${REVIEWS}/leave/${productId}`,
        method: 'POST',
        data
    })
 },

}

export default new ReviewsService()