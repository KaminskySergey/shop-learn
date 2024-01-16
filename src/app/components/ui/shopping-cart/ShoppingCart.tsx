'use client'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import { clearCart, removeItemsById, updateQuantity } from "@/store/card/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { IInitialState } from "@/store/card/cart.interface";
import Button from "../button/Button";
import { RiShoppingCartFill } from "react-icons/ri";
import { notifyClearAllCart, notifyDeleteFromCart } from "@/constants/toasts";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import TotalPriceQuantity from "../total-price-quantity/TotalPriceQuantity";
import { useTotal } from "@/hooks/useTotal";


interface IShoppingCart {
  setIsOpen?: (data: boolean) => void | undefined;
}

export default function ShoppingCart({ setIsOpen }: IShoppingCart) {
  const { cart } = useSelector((state: { cart: IInitialState, quantity: number }) => state.cart)
  const dispatch = useDispatch()
  const { totalPrice } = useTotal()
  const handleChangeQuantity = (productId: number, operation: string) => {
    dispatch(updateQuantity({ productId, operation }))
  }
  const handleDeleteFromCart = (productId: number) => {
    dispatch(removeItemsById(productId))
    notifyDeleteFromCart()
  }

  const handleClearCart = () => {
    dispatch(clearCart([]));
    notifyClearAllCart()

  };
  useEffect(() => {
    if (cart.length === 0) {

      redirect('/')
    }
  }, [cart])
  return (
    <>
      <div className="mx-auto p-7">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mr-4 underline">Shopping Cart</h2>
            <TotalPriceQuantity />
          </div>
          {cart.length !== 0 && (
            <div>
              <Button onClick={handleClearCart} clear={true}>Clear Cart</Button>
            </div>
          )}
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="divide-y divide-yellow-400 mb-4">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex flex-col md:flex-row items-center justify-between relative">
                <div className="flex items-center mb-4 md:mb-0 max-w-[500px]">
                  <Link href={`/product/${item.id}`} className="flex items-center hover:text-slate-400">
                    <Image
                      width={150}
                      height={150}
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <p className="text-lg font-medium text-black-800">{item.title}</p>
                      <p className="text-sm font-bold text-black-500">{item.price.toFixed(2)} USD</p>
                    </div>
                  </Link>
                </div>
                <div className="flex items-center">
                  <button onClick={() => handleChangeQuantity(item.id, 'increment')} className="text-black-500 hover:text-black-700">
                    <FaPlus />
                  </button>
                  <span className="text-lg px-1">{item.quantity}</span>
                  <button onClick={() => handleChangeQuantity(item.id, 'decrement')} className="text-black-500 hover:text-black-700">
                    <FaMinus />
                  </button>
                </div>
                <div className="mt-4 md:mt-0 md:absolute md:right-32">
                  <Button cart={true} onClick={() => handleDeleteFromCart(item.id)}>Remove from Cart</Button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cart.length !== 0 && (
          <div className="flex items-center w-full md:w-48">
            {totalPrice !== 0 && <Link href={'/order'} onClick={() => {
              if (setIsOpen) {
                setIsOpen(false);
              }
            }}>
              <Button>Place Order</Button>
            </Link>}
          </div>
        )}
      </div>
    </>

  );

}
