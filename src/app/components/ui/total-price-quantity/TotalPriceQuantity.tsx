'use client'

import { useTotal } from "@/hooks/useTotal"
import { RiMoneyDollarBoxFill, RiShoppingCartFill } from "react-icons/ri"

interface ITotalPriceQuantity {}

export default function TotalPriceQuantity({}: ITotalPriceQuantity) {

    const {totalItems, totalPrice} = useTotal()

    return <div className="flex items-center space-x-4">
    <div className="flex items-center text-yellow-400">
        <RiShoppingCartFill className="w-8 h-8 cursor-pointer" />
        <span className="ml-2 text-lg font-semibold">{totalItems}</span>
    </div>
    <div className="flex items-center text-green-400">
        <RiMoneyDollarBoxFill className="w-8 h-8 cursor-pointer" />
        <span className="ml-2 text-lg font-semibold">${totalPrice.toFixed(2)}</span>
    </div>
</div>
}
