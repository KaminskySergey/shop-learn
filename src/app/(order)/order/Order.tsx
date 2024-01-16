'use client'

import OrderForm from "@/app/components/ui/order-form/OrderForm"
import ShoppingCartOrder from "@/app/components/ui/shopping-cart/ShoppingCartOrder"
import { IInitialState } from "@/store/card/cart.interface"
import { RiShoppingCartFill } from "react-icons/ri"
import { useSelector } from "react-redux"
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import TotalPriceQuantity from "@/app/components/ui/total-price-quantity/TotalPriceQuantity"


interface IOrder { }

export default function Order({ }: IOrder) {
    const { cart } = useSelector((state: { cart: IInitialState, quantity: number }) => state.cart);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0)
    return <>
        <div className='flex justify-between w-full border-b-[3px] border-yellow-500 h-12 px-[16px] '>
            <div className="font-bold text-2xl">
                Placing an order
            </div>
            <TotalPriceQuantity />
        </div>
        <div className="flex mt-[32px]">
            <div className="w-6/12">
                <OrderForm />

            </div>
            <div className="w-6/12">
                <ShoppingCartOrder />
            </div>
        </div>
    </>
}
