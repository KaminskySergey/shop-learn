import { instance } from "@/api/interceptor"
import { ICard } from "./cart.interface"
const ORDERS = 'carts'

const CartService = {
 async addProductToCard(data: any) {
    return instance<ICard>({
        url: ORDERS,
        method: 'POST',
        data
    })
 },

 

}

export default CartService;