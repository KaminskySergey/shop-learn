import { instance } from "@/api/interceptor"
import { IReview } from "@/types/review.interface"
import { IUser } from "@/types/user.interface"
const USERS = 'users'

export const UserService = {
 async getUser() {
    return instance<IUser>({
        url: `${USERS}/profile`,
        method: 'GET'
    })
 },

 async updateUser(id: string | number, data: IUser) {
    return instance<IReview>({
        url: `${USERS}/profile`,
        method: 'PUT',
        data
    })
 },

 async toggleFavorite(productId: string | number) {
    return instance<IReview>({
        url: `${USERS}/favorites/${productId}`,
        method: 'PATCH',
    })
 },

}

export default new UserService()