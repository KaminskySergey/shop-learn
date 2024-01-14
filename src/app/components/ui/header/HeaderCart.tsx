'use client'
import { RiShoppingCartFill } from "react-icons/ri";
import Modal from "../modal/Modal";
import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { IInitialState, IInitialStateCatalog } from "@/store/card/cart.interface";

interface IHeaderCart { }

export default function HeaderCart({ }: IHeaderCart) {
    const { cart } = useSelector((state: {cart: IInitialState, quantity: number}) => state.cart);

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
    return (
      <Link href="/shopping-cart">
        <div className="relative">
          <RiShoppingCartFill className="text-yellow-400 w-8 h-8 cursor-pointer" />
  
          {totalItems > 0 && (
            <div className="absolute top-[-4px] right-[-5px] bg-red-500 font-bold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </div>
          )}
        </div>
      </Link>
    );
}
