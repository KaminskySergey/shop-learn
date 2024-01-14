'use client'
import { IInitialStateCatalog } from "@/store/card/cart.interface"
import { IProduct } from "@/types/product.interface"
import { useSelector } from "react-redux"

export const useIconCart = (id: number) => {
    const {cart} = useSelector((state: IInitialStateCatalog) => state.cart)

    const toItemsCart = cart.some((el: IProduct) => el.id === id)
    return {
        toItemsCart
    }
}