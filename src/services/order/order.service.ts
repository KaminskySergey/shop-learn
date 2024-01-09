import { instance } from "@/api/interceptor"
import { IReview } from "@/types/review.interface"
import { IOrder } from "./order.interface"
const ORDERS = 'orders'

export const OrderService = {
 async getAll() {
    return instance<IOrder>({
        url: ORDERS,
        method: 'GET'
    })
 },

 async getByUserOrder() {
    return instance<IOrder>({
        url: `${ORDERS}/by-user`,
        method: 'GET'
    })
 },

 async placeOrder(data: IOrder) {
    return instance<IReview>({
        url: ORDERS,
        method: 'POST',
        data
    })
 },

}

export default new OrderService()